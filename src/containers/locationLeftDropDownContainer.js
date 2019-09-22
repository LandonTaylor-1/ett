import {connect} from 'react-redux';
import LocationLeftDropDown from '../components/locationLeftDropDown';
import {setLocationLeftDropDown} from '../actions/index';

const mapDispatchToProps = {
    setLeft: setLocationLeftDropDown
}

export default connect(null, mapDispatchToProps)(LocationLeftDropDown);