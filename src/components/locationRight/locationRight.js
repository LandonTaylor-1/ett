import React from 'react';
import './locationRight.css';
import './locationRight.scss';

function LocationRight(props) {
    let style = {
        backgroundColor: props.colorRight
    }
    function selectRight(e) {
        if(props.setRight){
            props.setRight(e.target.id);
        }
    }
    return(
        <div>
            <div id="container-righter">
                <div id="container-right">
                    <div id="Right: 3 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 4 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 5 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 6 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 7 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 8 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 9 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 10 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 11 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 12 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 1 o'Clock" className="right" style={style} onClick={selectRight}></div>
                    <div id="Right: 2 o'Clock" className="right" style={style} onClick={selectRight}></div>
                </div>
            </div>
        </div>
    )
}

export default LocationRight;