import { connect } from 'react-redux';
import Reports from '../components/Reports.js';

const mapStateToProps = (state) => {
  return {
      open: state.reportsReducer.displayReports
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
