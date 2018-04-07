import React, {Component, Fragment} from 'react';
import './style/App.css';
import Header from './components/Header/index';
import Code from './components/Code/index';
import Footer from './components/Footer/index';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Code />
        <Footer />
      </Fragment>
    );
  }
}
