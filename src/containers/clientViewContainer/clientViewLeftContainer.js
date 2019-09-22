import {connect} from 'react-redux';
import ClientViewLeft from '../../components/clientView/clientViewLeft/clientViewLeft';

function mapStateToProps(state) {
    return {
        pesViewLeft: state.pesViewLeft,
        locationLeftDropDown: state.locationLeftDropDown,
        colorLeft: state.colorLeft,


    }
}

export default connect(mapStateToProps)(ClientViewLeft);