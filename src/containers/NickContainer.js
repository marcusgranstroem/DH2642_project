import { connect } from 'react-redux';
import Nick from '../components/Nick.js';
import { changeNickname } from '../actions';

const mapStateToProps = (state) => {
    return {
        userName: state.loginReducer.userName,
        userToken: state.loginReducer.userToken
    };
};

const mapDispatchToProps = (dispatch) => ({
    changeNickname: (newName, userToken) => dispatch(changeNickname(newName, userToken))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nick);
