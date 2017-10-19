import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Avatar from './components/Avatar.jsx';
import Contact from './components/Contact.jsx';
import Skill from './components/Skill.jsx';
import Experience from './components/Experience.jsx';

import 'bootstrap/scss/bootstrap.scss';

const experiences = [
  {
    logo: '',
    company: 'SAP China Lab',
    duration: 'Apr 2014 - present',
    current: true,
    title: 'Senior UI Engineer',
    description: 'Working in UI commons team of Platform Pillar'
  },
  {
    logo: '',
    company: 'Cisco System',
    duration: 'Oct 2013 – Mar 2014',
    title: 'Software Engineer',
    description: 'Develop BI system'
  },
  {
    logo: '',
    company: 'ICBC Software Development Center',
    duration: 'Jul 2008 - Sep 2013',
    title: 'Software Developer - Sr. Software Developer',
    description: 'Develop B/S web applications of operational risk monitoring in ICBC. Cover full cycle of software development including demand analysis, web page design, development, test support and maintenance. Work on both front-end and back-end.'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Avatar/>
        <Experience experiences={experiences}/>
        <Skill/>
        <Contact/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
