import {connect} from 'react-redux';
import LocationLeft from '../../components/locationLeft/locationLeft';
import {setLocationLeft} from '../../actions/index';

function mapStateToProps(state) {
    return {
        colorLeft: state.colorLeft
    }
}

const mapDispatchToProps = {
    setLeft: setLocationLeft
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationLeft);