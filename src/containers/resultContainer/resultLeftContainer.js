import {connect} from 'react-redux';
import ResultLeft from '../../components/results/resultLeft';
import {setPesViewLeft} from '../../actions/index';

function mapStateToProps(state) {
    return {
        locationLeft: state.locationLeft,
        colorLeft: state.colorLeft
    }
}

const mapDispatchToProps = {
    setColorLeft: setPesViewLeft,
    // setLocationLeft: setPesViewLeft
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultLeft);