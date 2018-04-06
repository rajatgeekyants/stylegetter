import React, {Component, Fragment} from 'react';
import './App.css';
import {convertCode} from './core';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {codeinput: undefined, outputcode: undefined};
  }
  handlePaste(e) {
    var clipboardData, pastedData;

    // Stop data actually being pasted into div
    // e.stopPropagation();
    // e.preventDefault();

    // Get pasted data via clipboard API
    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData('Text');

    // Do whatever with pasteddata
    const generatedCode = convertCode(pastedData);
    this.setState({outputcode: generatedCode});
    // console.log(this.state.outputcode);
  }
  componentDidMount() {
    this.codeinputRef.addEventListener('paste', e => {
      this.handlePaste(e);
    });
  }

  render() {
    return (
      <Fragment>
        <div id="header">
          <h1>StyleGetter!</h1>
          <h2>Paste your code and get the StyleSheet</h2>
        </div>
        <div className="code">
          <textarea
            ref={ref => {
              this.codeinputRef = ref;
            }}
            className="code-input"
            rows={30}
            cols={160}
            placeholder="Write Code Here"
            autoComplete="off"
          />
          <textarea
            value={this.state.outputcode}
            ref={ref => {
              this.outputcoderef = ref;
            }}
            className="code-output"
            rows={30}
            cols={160}
            placeholder="Get StyleSheet from here!"
            autoComplete="off"
          />
        </div>
        <div className="footer">
          <text className="footerText">
            Made with <div id="heart">{'\u2764'}</div> by{' '}
            <img
              className="logo"
              alt="GeekyAnts Logo"
              src="https://geekyants.com/images/logo-icon-lg.png"
            />
            <a href="https://geekyants.com">GeekyAnts</a>
          </text>
        </div>
      </Fragment>
    );
  }
}
