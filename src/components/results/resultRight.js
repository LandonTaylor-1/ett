import React from 'react';

function ResultRight(props) {
    function pesRight() {
        fetch('/pesright', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({location: props.locationRight, color: props.colorRight || 'White'})
        })
        .then(res=>res.json())
        .catch(console.log)
    }
    return(
        <div>
            <div>{props.locationRight} {props.colorRight || "White"}</div>
            <button onClick={pesRight}>Send Right</button>
        </div>
    )
}

export default ResultRight;