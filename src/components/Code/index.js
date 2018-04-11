import React, {Component} from 'react';
import './style.css';
import {convertCode} from '../../core';

export default class Code extends Component {
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
      <div className="code">
        <textarea
          ref={ref => {
            this.codeinputRef = ref;
          }}
          data-gramm_editor="false"
          className="code-input"
          rows={30}
          cols={160}
          placeholder="Paste your React Native code with inline style here"
          autoComplete="off"
        />
        <textarea
          value={this.state.outputcode}
          ref={ref => {
            this.outputcoderef = ref;
          }}
          data-gramm_editor="false"
          className="code-output"
          rows={30}
          cols={160}
          placeholder="And get the StyleSheet from here!"
          autoComplete="off"
        />
      </div>
    );
  }
}
