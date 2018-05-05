import { connect } from 'react-redux';
import Nick from '../components/Nick.js';
//import { postReport } from '../actions';

const mapStateToProps = (state) => {
  return {
      userName: state.loginReducer.userName
  };
};

const mapDispatchToProps = (dispatch) => ({
//    postReport: (quakeId, username, comment) => dispatch(postReport(quakeId, username, comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nick);
