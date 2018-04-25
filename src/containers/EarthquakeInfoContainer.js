import { connect } from 'react-redux';
import EarthquakeInfo from '../components/EarthquakeInfo.js';

const mapStateToProps = (state) => {
  return {
      name: "TestName",
      magnitude: "TestMagnitude",
      lat: "TestLatitude",
      lon: "TestLongitude",
      date: "2100-01-01 00:00",
      vissible: false
  };
};

export default connect(
  mapStateToProps
)(EarthquakeInfo);
