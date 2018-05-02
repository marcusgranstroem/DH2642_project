import { connect } from 'react-redux';
import Snack from '../components/Snack.js';

var forceUpdate = false;

const mapStateToProps = (state) => {
    /*
    * This forceUpdate check and changing of duration is to force an update in
    * the snackbar, so that it rerenders regardless (since we want it to show
    * each time you search and the overflow limit is reached).
    * duration is changed to force a rerender, because 3000 or 3001 milliseconds
    * is an unnoticable difference.
    */
    var dur;
    if(forceUpdate) {
        dur = 3000;
        forceUpdate = !forceUpdate;
    } else {
        dur = 3001;
        forceUpdate = !forceUpdate;
    }

  return {
      open: state.earthquakeReducer.overflow,
      message: "Search too big. Some results may not be shown.",
      duration: dur
  };
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Snack);
