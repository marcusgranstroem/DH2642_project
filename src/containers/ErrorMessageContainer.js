import { connect } from 'react-redux';
import ErrorMessage from '../components/ErrorMessage.js';
import { closeErrorMessage } from '../actions';

const mapStateToProps = (state) => {
    return {
        open: state.errorReducer.displayError,
        message: state.errorReducer.errorMessage
    };
};

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(closeErrorMessage())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ErrorMessage);
