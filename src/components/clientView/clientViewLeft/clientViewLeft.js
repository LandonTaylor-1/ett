import React from 'react';
import './clientViewLeft.css';
import './clientViewLeft.scss';

class ClientViewLeft extends React.Component {
    state = {
        
    }
    componentDidMount() {
    }
    selectLeft = (e) => {
        // this.setState({
        //     style: {backgroundColor: this.props.colorLeft}
        // })
        // if (e.target.id === this.props.locationLeft) {
        //     console.log('Yep!')
        //     e.target.style = {backgroundColor: 'orange'}
        // }
        this.refs.Progress1.style = {backgroundColor: 'green'}
        }

    // WHAT!?!?!
    // function go(e) {
    //     e.target.children[props.locationLeft[6]].style = {backgroundColor : 'yellow'}
    // }
    render() {
        return(
            <div>
                <div id="container-clientleft">
                    <div id="container-lefty">
                        <div id="Left: 3 o'Clock" ref="Progress1" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 4 o'Clock" ref="Left: 4 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 5 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 6 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 7 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 8 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 9 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 10 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 11 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 12 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 1 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                        <div id="Left: 2 o'Clock" className="lefty" style={this.state.style} onClick={this.selectLeft}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientViewLeft;