import { connect } from 'react-redux';
import Reports from '../components/Reports.js';
import { closeUserReports } from '../actions';

const mapStateToProps = (state) => {
  return {
      open: state.reportsReducer.displayReports
  };
};

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(closeUserReports())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
