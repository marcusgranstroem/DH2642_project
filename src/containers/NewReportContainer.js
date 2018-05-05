import { connect } from 'react-redux';
import NewReport from '../components/NewReport.js';
import { postReport } from '../actions';

const mapStateToProps = (state) => {
  return {
      quakeId: state.reportsReducer.quakeId,
      userName: state.loginReducer.userName
  };
};

const mapDispatchToProps = (dispatch) => ({
    postReport: (quakeId, username, comment) => dispatch(postReport(quakeId, username, comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewReport);
