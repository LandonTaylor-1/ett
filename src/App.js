import React from 'react';
import View from './components/view'
import ColorLeft from './containers/colorContainer/colorLeftContainer';
import ColorRight from './containers/colorContainer/colorRightContainer';
import LocationLeft from './containers/locationContainer/locationLeftContainer';
import LocationRight from './containers/locationContainer/locationRightContainer';
import ResultLeft from './containers/resultContainer/resultLeftContainer';
import ResultRight from './containers/resultContainer/resultRightContainer';
import ClientViewLeft from './containers/clientViewContainer/clientViewLeftContainer';
import LocationLeftDropDown from './containers/locationLeftDropDownContainer';

class App extends React.Component {
  state = {
    display: 0
  }

  componentDidMount() {

  }

  render(){
    // let content = null
    // if (this.state.display === 0) {
    //   content = 
    // } else if (this.state.display === 1) {
    //   content = 
    // }
    return (
      <div>
        <View />
        <ColorLeft />
        <LocationLeftDropDown />
        <ColorRight />
        <LocationLeft />
        <LocationRight />
        <ResultLeft />
        <ResultRight />
        <ClientViewLeft />
      </div>
    );
  }
}

export default App;