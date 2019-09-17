import React from 'react';
import './locationLeft.css';
import './locationLeft.scss';

function LocationLeft(props) {
    let style = {
        backgroundColor: props.colorLeft
    }
    function selectLeft(e) {
        if(props.setLeft){
            props.setLeft(e.target.id);
        }
    }
    return(
        <div>
            <div id="container-lefter">
                <div id="container-left">
                    <div id="Left: 3 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 4 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 5 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 6 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 7 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 8 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 9 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 10 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 11 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 12 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 1 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 2 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                </div>
            </div>
        </div>
    )
}

export default LocationLeft;