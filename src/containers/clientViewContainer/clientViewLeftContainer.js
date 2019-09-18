import {connect} from 'react-redux';
import ClientViewLeft from '../../components/clientView/clientViewLeft/clientViewLeft';

function mapStateToProps(state) {
    return {
        locationLeft: state.locationLeft,
        colorLeft: state.colorLeft
    }
}

export default connect(mapStateToProps)(ClientViewLeft);