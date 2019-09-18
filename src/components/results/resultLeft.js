import React from 'react';

function ResultLeft(props) {
    function pesLeft() {
        fetch('/pesleft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({location: props.locationLeft, color: props.colorLeft || 'White'})
        })
        .then(res=>res.json())
        .catch(console.log)
    }
    return(
        <div>
            <div>{props.locationLeft} {props.colorLeft || "White"}</div>
            <button onClick={pesLeft}>Send Left</button>
        </div>
    )
}

export default ResultLeft;