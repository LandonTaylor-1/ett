import {connect} from 'react-redux';
import LocationRight from '../../components/locationRight/locationRight';
import {setLocationRight} from '../../actions/index';

function mapStateToProps(state) {
    return {
        colorRight: state.colorRight
    }
}

const mapDispatchToProps = {
    setRight: setLocationRight
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationRight);