import {connect} from 'react-redux';
import ResultRight from '../../components/results/resultRight';

function mapStateToProps(state) {
    return {
        locationRight: state.locationRight,
        colorRight: state.colorRight
    }
}

export default connect(mapStateToProps)(ResultRight);