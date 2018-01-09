import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
  Header,
  Avatar,
  Skill,
  Experience,
  Footer
} from 'Components';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'open-iconic/font/css/open-iconic-bootstrap.min.css';
import './app.less';

const experiences = [
  {
    index: 3,
    start: '2014/04',
    image: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/AAEAAQAAAAAAAAogAAAAJDFhOGIxNWI5LWI0YWQtNDYyYy1hNjlhLWQ0M2ZiYmZjZjIxYw.png',
    title: 'SAP China Lab',
    current: true,
    subtitle: 'Senior UI Engineer',
    description: 'Working on common components/applications for the HCM product in UI Commons Team.'
  },
  {
    index: 2,
    start: '2013/10',
    image: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/AAIA_wDGAAAAAQAAAAAAAAroAAAAJDcwNWMyNjYxLTdiMDMtNDliOS1iYmQxLTk1Zjk4NjdmYzM3OA.png',
    title: 'Cisco System',
    subtitle: 'Software Engineer',
    description: 'Develop real-time data visualization in BI system.'
  },
  {
    index: 1,
    start: '2008/07',
    image: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/p/1/000/031/14d/099d1fd.png',
    title: 'ICBC Software Development Center',
    subtitle: 'Sr. Software Developer',
    description: 'Develop B/S web applications of operational risk monitoring on both front-end and back-end.'
  },
  {
    index: 0,
    start: '2004/09',
    image: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/p/6/005/007/3f8/3848bed.png',
    title: 'Shanghai Jiao Tong University',
    subtitle: 'Bachelor of Engineer',
    description: 'Information Security'
  }
];

const skills = [
  {id: 'angular', type: 'frontend', text: 'Angular'},
  {id: 'react', type: 'frontend', text: 'React'},
  {id: 'jquery', type: 'frontend', text: 'jQuery'},
  {id: 'es6', type: 'frontend', text: 'ES6'},
  {id: 'ui5', type: 'frontend', text: 'SAPUI5/OpenUI5'},
  {id: 'less', type: 'frontend', text: 'Less'},
  {id: 'bootstrap', type: 'frontend', text: 'Bootstrap'},
  {id: 'node', type: 'backend', text: 'Node.js'},
  {id: 'express', type: 'backend', text: 'Express'},
  {id: 'odata', type: 'backend', text: 'OData'},
  {id: 'mongodb', type: 'backend', text: 'MongoDB'},
  {id: 'java', type: 'backend', text: 'Java'},
  {id: 'sql', type: 'backend', text: 'SQL'},
  {id: 'webpack', type: 'util', text: 'Webpack'},
  {id: 'git', type: 'util', text: 'Git'},
  {id: 'gulp', type: 'util', text: 'Gulp'},
  {id: 'yeoman', type: 'util', text: 'Yeoman'}
];

const links = [
  {
    id: 'github',
    text: 'Github',
    href: 'https://github.com/zhangliangyi'
  },
  {
    id: 'linkedin',
    text: 'Linkedin',
    href: 'https://www.linkedin.com/in/zhangliangyi/'
  },
  {
    id: 'codeSchool',
    text: 'Code School',
    href: 'https://www.codeschool.com/users/zhangliangyi/'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Header links={links}/>
        <Avatar/>
        <Experience experiences={experiences}/>
        <Skill skills={skills}/>
        <Footer/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
