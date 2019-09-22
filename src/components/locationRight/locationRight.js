import React from 'react';
import './locationRight.css';
import './locationRight.scss';

class LocationRight extends React.Component {
    state = {
        pesViewLeft: this.props.pesViewLeft,
        pes: ""
    }
    componentDidMount(){
        fetch("/pesleft/last")
            .then(res=>res.json())
            .then((pes)=>this.setState({pes}))
    }
    render(){
        let leftEyeClient = this.state.pesViewLeft.map((view, i)=>{
            return <div
                key={i}
                view={view}
                id={view.id}
                className={view.className}
                style={view.id === this.state.pes.location ? {backgroundColor: this.state.pes.color} : {backgroundColor: 'black'}}
            ></div>
        })
        console.log(JSON.stringify(this.state.pes.location))
        return(
            <div id="container-lefter">
                <div id="container-left">
                    {leftEyeClient}
                </div>
            </div>
        )
    }
}

export default LocationRight;