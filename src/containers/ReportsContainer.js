import { connect } from 'react-redux';
import Reports from '../components/Reports.js';
import { closeUserReports } from '../actions';

const mapStateToProps = (state) => {
  return {
      open: state.reportsReducer.displayReports,
      reports: state.reportsReducer.userReports,
      userName: state.loginReducer.userName,
      isLoggedIn: state.loginReducer.isLoggedIn
  };
};

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(closeUserReports())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reports);
