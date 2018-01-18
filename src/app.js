import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
  Header,
  Avatar,
  Location,
  Hobby,
  Skill,
  Experience,
  Footer
} from 'Components';

import data from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import './app.less';

class App extends Component {
  render() {
    return (
      <div>
        <Header links={data.links}/>
        <Avatar/>
        <Location city={data.location.city} country={data.location.country}/>
        <Hobby hobbies={data.hobbies}/>
        <Experience experiences={data.experiences}/>
        <Skill skills={data.skills}/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
