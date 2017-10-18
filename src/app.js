import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Avatar from './components/Avatar.jsx';
import Contact from './components/Contact.jsx';
import Skill from './components/Skill.jsx';
import Experience from './components/Experience.jsx';

import 'bootstrap/scss/bootstrap.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Avatar/>
        <Skill/>
        <Experience/>
        <Contact/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
