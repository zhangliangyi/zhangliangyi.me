import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
  Header,
  Body,
  Footer
} from 'Components';

import data from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import './fontello.css';
import './app.less';

class App extends Component {
  render() {
    return (
      <div>
        <Header data={data}/>
        <Body data={data}/>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
