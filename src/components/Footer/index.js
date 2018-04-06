import React, {Component} from 'react';
import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <text className="footerText">
          Made with
          <div id="heart">{'\u2764'}</div>
          by
          <img
            className="logo"
            alt="GeekyAnts Logo"
            src="https://geekyants.com/images/logo-icon-lg.png"
          />
          <a href="https://geekyants.com">GeekyAnts</a>
        </text>
      </div>
    );
  }
}
