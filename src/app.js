import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Avatar from './components/Avatar.jsx';
import Skill from './components/Skill.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';

import 'bootstrap/scss/bootstrap.scss';

const experiences = [
  {
    logo: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/AAEAAQAAAAAAAAogAAAAJDFhOGIxNWI5LWI0YWQtNDYyYy1hNjlhLWQ0M2ZiYmZjZjIxYw.png',
    name: 'SAP China Lab',
    duration: 'Apr 2014 - present',
    current: true,
    title: 'Senior UI Engineer',
    description: 'Working in UI commons team of Platform Pillar.'
  },
  {
    logo: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/AAIA_wDGAAAAAQAAAAAAAAroAAAAJDcwNWMyNjYxLTdiMDMtNDliOS1iYmQxLTk1Zjk4NjdmYzM3OA.png',
    name: 'Cisco System',
    duration: 'Oct 2013 – Mar 2014',
    title: 'Software Engineer',
    description: 'Develop data visualization in BI system.'
  },
  {
    logo: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/p/1/000/031/14d/099d1fd.png',
    name: 'ICBC Software Development Center',
    duration: 'Jul 2008 - Sep 2013',
    title: 'Software Developer - Sr. Software Developer',
    description: 'Develop B/S web applications of operational risk monitoring in ICBC. Cover full cycle of software development including demand analysis, web page design, development, test support and maintenance. Work on both front-end and back-end.'
  },
  {
    logo: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/p/6/005/007/3f8/3848bed.png',
    name: 'Shanghai Jiao Tong University',
    duration: 'Sep 2004 - Jun 2008',
    title: 'Bachelor of Engineer',
    description: 'Information Security'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Avatar/>
        <Experience experiences={experiences}/>
        <Skill/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
