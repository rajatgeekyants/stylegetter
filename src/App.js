import React, {Component, Fragment} from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>StyleGetter!</h1>
        <h2>Paste your code and get the StyleSheet {'\u2728'}</h2>
        <div className="code">
          <textarea
            className="code-input"
            rows={35}
            cols={180}
            placeholder="Write Code Here"
            autoComplete="off"
            style={{fontSize: 20}}
          />
          <textarea
            className="code-output"
            rows={35}
            cols={180}
            placeholder="Get StyleSheet from here!"
            autoComplete="off"
            style={{fontSize: 20}}
          />
        </div>
      </Fragment>
    );
  }
}
