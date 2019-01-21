import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
  Header,
  Body,
  Footer
} from 'Components';

import data from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.less';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
