import React from 'react';

class ResultLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: []}
        this.myRef = React.createRef()
    }
    pesLeft = () => {
        fetch('/pesleft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({location: this.props.locationLeft, color: this.props.colorLeft || 'White'})
        })
        .then(res=>res.json())
        .catch(console.log)
        let content = <div key={this.state.display.length + 1} ref={this.myRef} style={{backgroundColor: this.props.colorLeft}}>{this.state.display.length + 1} - {this.props.locationLeft} {this.props.colorLeft || "White"} </div>
        const newContent = [content, ...this.state.display];
        this.setState({
            display: newContent
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.pesLeft}>Send Left</button>
                {/* <div>{this.props.locationLeft} {this.props.colorLeft || "White"}</div> */}
                {this.state.display}
            </div>
        )
    }
}

export default ResultLeft;