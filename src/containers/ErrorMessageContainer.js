import { connect } from 'react-redux';
import ErrorMessage from '../components/ErrorMessage.js';
//import { closeUserReports } from '../actions';

const mapStateToProps = (state) => {
  return {
      open: true,
      message: ""
  };
};

const mapDispatchToProps = (dispatch) => ({
    //close: () => dispatch(closeUserReports())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ErrorMessage);
