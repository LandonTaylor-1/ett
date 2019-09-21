import React from 'react';
import './clientViewLeft.css';
import './clientViewLeft.scss';

class ClientViewLeft extends React.Component {
    state = {
        style: {backgroundColor: 'black'}
    }
    componentDidMount() {
        this.setState({
            style: {backgroundColor: this.props.colorLeft}
        })
    }
    selectLeft = (e) => {
        let goo = {backgroundColor: this.props.colorLeft}
        this.setState({
            style: goo
        })
      
    }

    render() {
        return(
            <div>
                <div id="container-clientleft">
                    <div id="container-lefty">
                        <div id="Left: 3 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 4 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 5 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 6 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 7 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 8 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 9 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 10 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 11 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 12 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 1 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                        <div id="Left: 2 o'Clock" className="lefty" style={this.state.style} onChange={this.selectLeft}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClientViewLeft;