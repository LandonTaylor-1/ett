import {connect} from 'react-redux';
import ResultLeft from '../../components/results/resultLeft';

function mapStateToProps(state) {
    return {
        locationLeft: state.locationLeft,
        colorLeft: state.colorLeft
    }
}

export default connect(mapStateToProps)(ResultLeft);