import React from 'react';
import './locationLeft.css';
import './locationLeft.scss';

class LocationLeft extends React.Component {
    state = {pesViewLeft: []}
    componentDidMount(){
        this.setState({
            pesViewLeft: this.props.pesViewLeft
        })
    }
    // let style = {backgroundColor: props.colorLeft}
    
    selectLeft=(e)=> {
        if (this.props.setLeft){
            this.props.setLeft(e.target.id);
            // props.setLeftKey(e.target.view);
            console.log(e.target.id)
            console.log(e.target.value)
        }
    }
    render(){
        let leftEyeController = this.state.pesViewLeft.map((view, i)=>{
            return <div
                key={i}
                i={i}
                value={view.index}
                id={view.id}
                className={view.className}
                onClick={this.selectLeft}
            ></div>
        })
        return(
            <div id="container-lefter">
                <div id="container-left">
                    {leftEyeController}
                </div>
            </div>
        )
    }
}




//     let style = {backgroundColor: 'green'}
//     let pesStyle = {backgroundColor: props.colorLeft}

//     function selectLeft(e) {
//         if (props.setLeft){
//             props.setLeft(e.target.id);
//             console.log(e.target.id)
//             e.target.style = pesStyle;
//         }
//     }
//     function go(e) {
//     }
//     return(
//         <div>
//             <div id="container-lefter">
//                 <div id="container-left" onClick={go}>
//                     <div id="Left: 3 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 4 o'Clock" className="left" style={pesStyle} onClick={selectLeft}></div>
//                     <div id="Left: 5 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 6 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 7 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 8 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 9 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 10 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 11 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 12 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 1 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                     <div id="Left: 2 o'Clock" className="left" style={style} onClick={selectLeft}></div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LocationLeft;