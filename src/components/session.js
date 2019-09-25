import React from 'react';

class Session extends React.Component {
    state = {
        pastClient: "",
        session: {
            'location': "Left: 3 o'Clock",
            'color': 'blue',
            'name': 'landon',
            'level': '5'
        }
    }
    componentDidMount(){
        
    }

    render(){
        debugger
            let viewSession = this.state.session.map((i, client)=>{
                return <div
                    key={i}
                    style={{backgroundColor: client.color}}
                    >
                        {i+1}.) - {client.location} {client.color || "White"} Level: {client.level}
                    </div>})
        
        return(
            <div>
                <input onChange={(e)=>{this.setState({pastClient: e.target.value.toLowerCase()})}} />
                <button onClick={()=>{
                    fetch('/pesleft/landon')
                    .then(res=>res.json())
                    .then(session=>{this.setState({session: session})})}}>
                View Session</button>
                {viewSession}
            </div>
        )
    }
}

export default Session;