import React, {Component, Fragment} from 'react';
import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
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
            <a href="https://geekyants.com" className="GeekyAnts-link">
              GeekyAnts
            </a>
          </text>
          <div className="team-container">
            <div className="team-mates">
              <div className="person">
                <div className="img-container">
                  <img
                    src={require('../../style/rajat.jpeg')}
                    alt="avatar"
                    className="image"
                  />
                </div>
                <div className="name-container">
                  <div className="firstname">Rajat</div>
                  <div className="lastname">S</div>
                  <div className="social">
                    <a
                      href="https://twitter.com/geeky_writer_"
                      className="fa fa-twitter"
                    />
                    <a
                      href="https://medium.com/@geeky_writer_"
                      className="fa fa-medium"
                    />
                    <a
                      href="https://github.com/rajatgeekyants"
                      className="fa fa-github"
                    />
                  </div>
                </div>
              </div>
              <div className="person">
                <div className="img-container">
                  <img
                    src={require('../../style/Ayush.jpeg')}
                    alt="avatar"
                    className="image"
                  />
                </div>
                <div className="name-container">
                  <div className="firstname">Ayush</div>
                  <div className="lastname">Bansal</div>
                  <div className="social">
                    <a
                      href="https://twitter.com/scorpio002"
                      className="fa fa-twitter"
                    />
                    <a
                      href="https://github.com/bansalayush"
                      className="fa fa-github"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
