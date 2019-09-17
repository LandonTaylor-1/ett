import React from 'react'

function View(props) {
    return(
        <div>
            <button onClick={()=>{props.display = 0}}>Controller</button>
            <button onClick={()=>{props.display = 1}}>Client</button>
        </div>
    )
}

export default View;