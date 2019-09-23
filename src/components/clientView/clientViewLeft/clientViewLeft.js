import React from 'react';
import './clientViewLeft.css';
import './clientViewLeft.scss';
import 'whatwg-fetch';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3003');

class ClientViewLeft extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pesViewLeft: this.props.pesViewLeft,
            // colorLeft: this.props.colorLeft,
            // locationLeftDropDown: this.props.locationLeftDropDown
        }
        this.sendSocketIO = this.sendSocketIO.bind(this);

    }
    // componentDidMount(){
    //     this.setState({
    //         pesViewLeft: this.props.pesViewLeft
    //         colorLeft: this.props.colorLeft
    //     })
    // }
    // shouldComponentUpdate(){
    //     this.setState({
    //         colorLeft: this.props.colorLeft,
    //         locationLeftDropDown: this.props.locationLeftDropDown
    //     })
    // }
    go = ()=>{
        fetch('/pesleft', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({location: this.props.locationLeftDropDown, color: this.props.colorLeft || 'White'})
        })
        .then(res=>res.json())
        .catch(console.log)
    }
    sendSocketIO() {
        socket.emit('example_message', 'demo');
    }
    render(){
        let leftEyeClient = this.state.pesViewLeft.map((view, i)=>{
            return <div
                key={i}
                view={view}
                id={view.id}
                className={view.className}
                style={view.id === this.props.locationLeftDropDown ? {backgroundColor: this.props.colorLeft} : {backgroundColor: 'black'}}
            ></div>
        })
        return(
            <div id="container-lefter">
                <div id="container-left">
                    {leftEyeClient}
                </div>
                <button onClick={this.go}>Send</button>
                <div>
                    <button onClick={this.sendSocketIO}>Send Socket.io</button>
                </div>
            </div>
        )
    }
}

export default ClientViewLeft;