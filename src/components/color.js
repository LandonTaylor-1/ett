import React from 'react';

function color(props) {
    return (
        <div>
          Color: 
          <select 
        //   onChange={
        //     (e)=>{
        //       if(props.set){
        //         props.set(e.target.value);
        //         fetch('/color', {
        //           method: 'POST',
        //           headers: {
        //             'Content-Type': 'application/json'
        //           },
        //           body: JSON.stringify({color: e.target.value})
        //         })
        //         .then(res => res.json())
        //         .catch(console.log);
        //       }
        //     }
        //   }
          >
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Indigo">Indigo</option>
            <option value="Violet">Violet</option>
          </select>
        </div>
    );
  }
  export default color;