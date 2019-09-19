import React from 'react';
import './locationLeft.css';
import './locationLeft.scss';

function LocationLeft(props) {
    let style = {backgroundColor: props.colorLeft}
    function selectLeft(e) {
        if(props.setLeft){
            props.setLeft(e.target.id);
        }
    }

    // function go(e) {
    //     if (e.target.children[5]) {
    //         e.target.children[5].style = {
    //             backgroundColor: props.colorLeft        
    //         }
    //         e.target.children[4].style = {
    //             backgroundColor: 'black'        
    //         }
    //         e.target.children[3].style = {
    //             backgroundColor: 'green'        
    //         }
    //         e.target.children[2].style = {
    //             backgroundColor: 'green'        
    //         }
    //     }
    // }
    return(
        <div>
            <div id="container-lefter">
                <div id="container-left">
                    <div id="Progress1" className="left" style={style} onClick={selectLeft}></div>
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