import logo from '../logo.svg'
import React, { Component } from 'react';

class Beamer extends Component {

  render() {
    return (
      <div className="Beamer">
        <img src={logo} className="Beamer-sign" alt="beamer" style={{
          position: 'absolute',
          width: this.props.magnitude,
          height:this.props.magnitude,
          left: - this.props.magnitude / 2,
          top: -this.props.magnitude / 2,}}/>
      </div>
    );
  }
}

export default Beamer;
