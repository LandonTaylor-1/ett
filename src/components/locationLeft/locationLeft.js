import React from 'react';
import './locationLeft.css';
import './locationLeft.scss';

function LocationLeft(props) {
    let style = {backgroundColor: 'green'}
    let pesStyle = {backgroundColor: props.colorLeft}

    function selectLeft(e) {
        if (props.setLeft){
            props.setLeft(e.target.id);
            console.log(e.target.id)
            e.target.style = pesStyle;
        }
    }
    function go(e) {
    }
    return(
        <div>
            <div id="container-lefter">
                <div id="container-left" onClick={go}>
                    <div id="Left: 3 o'Clock" className="left" style={style} onClick={selectLeft}></div>
                    <div id="Left: 4 o'Clock" className="left" style={pesStyle} onClick={selectLeft}></div>
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