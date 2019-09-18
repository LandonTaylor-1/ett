import React from 'react';
import './clientViewLeft.css';
import './clientViewLeft.scss';

function ClientViewLeft(props) {
    let style = {
        backgroundColor: 'blue'
    }
    function selectLeft(e) {
        if (e.target.id === props.locationLeft) {
            e.target.style = {font: 'bold'}
            console.log('Yep!')
        }
    }

    return(
        <div>
            <div id="container-clientleft">
                <div id="container-lefty">
                    <div id="Left: 3 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 4 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 5 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 6 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 7 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 8 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 9 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 10 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 11 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 12 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 1 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                    <div id="Left: 2 o'Clock" className="lefty" style={style} onClick={selectLeft}></div>
                </div>
            </div>
        </div>
    )
}

export default ClientViewLeft;