import React, { Component, Fragment } from 'react';
import './App.css';
import { convertCode } from './core';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { codeinput: undefined, outputcode: undefined };
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
    this.setState({ outputcode: generatedCode });
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
        <h1>StyleGetter!</h1>
        <h2>Paste your code and get the StyleSheet {'\u2728'}</h2>
        <div className="code">
          <textarea
            ref={ref => {
              this.codeinputRef = ref;
            }}
            className="code-input"
            rows={35}
            cols={180}
            placeholder="Write Code Here"
            autoComplete="off"
            style={{ fontSize: 20 }}
          />
          <textarea
            value={this.state.outputcode}
            ref={ref => {
              this.outputcoderef = ref;
            }}
            className="code-output"
            rows={35}
            cols={180}
            placeholder="Get StyleSheet from here!"
            autoComplete="off"
            style={{ fontSize: 20 }}
          />
        </div>
      </Fragment>
    );
  }
}
