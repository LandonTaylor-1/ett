import React from 'react';

class ResultLeft extends React.Component {
    constructor(props) {
        super(props);
        this.state = {display: []}
        this.myRef = React.createRef()
    }
    pesLeft = () => {
        // fetch('/pesleft', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({location: this.props.locationLeftDropDown, color: this.props.colorLeft || 'White'})
        // })
        // .then(res=>res.json())
        // .catch(console.log)
        let content =
            <div
                key={this.state.display.length + 1}
                ref={this.myRef}
                style={{backgroundColor: this.props.colorLeft}}>
                    {this.state.display.length + 1}.) - {this.props.locationLeftDropDown} {this.props.colorLeft || "White"} Level:
                    <select onChange={(e)=>{
                        fetch('/pesleft', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({location: this.props.locationLeftDropDown, color: this.props.colorLeft || 'White', level: e.target.value})
                        })
                        .then(res=>res.json())
                        .catch(console.log)
                        }
                    }>
                        <option value='10'>10</option>
                        <option value='9'>9</option>
                        <option value='8'>8</option>
                        <option value='7'>7</option>
                        <option value='6'>6</option>
                        <option value='5'>5</option>
                        <option value='4'>4</option>
                        <option value='3'>3</option>
                        <option value='2'>2</option>
                        <option value='1'>1</option>
                        <option value='0'>0</option>
                    </select>
            </div>
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