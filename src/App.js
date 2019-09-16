import React from 'react';
import './App.css';
import './App.scss';
import Color from './components/color';

class App extends React.Component {

  componentDidMount() {

  }
  render(){
    return (
      <div>
        <Color />
        <div id="container-lefter">
          <div id="container-left">
            <div id="twelve-left" className="left"></div>
            <div id="one-left" className="left"></div>
            <div id="two-left" className="left"></div>
            <div id="three-left" className="left"></div>
            <div id="four-left" className="left"></div>
            <div id="five-left" className="left"></div>
            <div id="six-left" className="left"></div>
            <div id="seven-left" className="left"></div>
            <div id="eight-left" className="left"></div>
            <div id="nine-left" className="left"></div>
            <div id="ten-left" className="left"></div>
            <div id="eleven-left" className="left"></div>
          </div>
        </div>
        <div id="container-lefter">
          <div id="container-right">
            <div id="twelve-right" className="right"></div>
            <div id="one-right" className="right"></div>
            <div id="two-right" className="right"></div>
            <div id="three-right" className="right"></div>
            <div id="four-right" className="right"></div>
            <div id="five-right" className="right"></div>
            <div id="six-right" className="right"></div>
            <div id="seven-right" className="right"></div>
            <div id="eight-right" className="right"></div>
            <div id="nine-right" className="right"></div>
            <div id="ten-right" className="right"></div>
            <div id="eleven-right" className="right"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;