import { connect } from 'react-redux';
import Snack from '../components/Snack.js';

var forceUpdate = false;

const mapStateToProps = (state) => {
  return {
      open: state.earthquakeReducer.overflow && !state.earthquakeReducer.searching, //chack when done searching
      message: "Search too big. Some results may not be shown.",
      duration: 3000
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Snack);
