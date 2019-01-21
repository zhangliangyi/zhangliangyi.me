const data = {
  name: '张良毅',
  name2: '(Jacob Zhang)',
  bio: 'The Simplest, The Best',
  gender: 'male',
  birthday: '1985/10/17',
  job: 'Lead UI Engineer',
  company: 'SAP Successfactors',
  work: 'JavaScript',
  career: '2008/07/01',
  location: 'Shanghai, China',

  links: [
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
  ],

  experiences: [
    {
      name: 'SAP Successfactors',
      start: '2014/04',
      logo: 'https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg',
      current: true,
      title: 'Lead UI Engineer',
      projects: [
        'SuccessMap Homepage',
        'Custom Tile Wizard',
        'Node.js Setup',
        'Gulp Plugin for Karma Testing Adoption',
        'Mock Server for Development'
      ],
      used: [
        'SAPUI5',
        'Node.js',
        'Karma',
        'QUnit',
        'Gulp',
        'Koa',
        'Git'
      ]
    },
    {
      name: 'Cisco Systems',
      start: '2013/10',
      end: '2014/03',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png',
      title: 'Software Engineer',
      projects: [
        'Real Time Data Visualization POCs'
      ],
      used: [
        'AngularJS',
        'Socket.io',
        'HTML5 Canvas'
      ]
    },
    {
      name: 'ICBC Software Development Center',
      start: '2008/07',
      end: '2013/09',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/33/Industrial_and_Commercial_Bank_of_China_logo.svg',
      title: 'Software Developer - Sr. Software Developer',
      project: [
        'B/S Web Applications in Operational Risk Management'
      ],
      used: [
        'jQuery',
        'Java',
        'SQL'
      ]
    },
    {
      name: 'Shanghai Jiao Tong University',
      start: '2004/09',
      end: '2008/06',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/da/Sjtu-logo-standard-red.png',
      title: 'Bachelor of Engineer, Information Security',
    }
  ],

  skills: [
    {
      name: 'jQuery',
      url: 'http://jquery.com/'
    },
    {
      name: 'SAPUI5/OpenUI5',
      url: 'https://openui5.org/'
    },
    {
      name: 'AngularJS 1.x',
      url: 'https://angularjs.org/'
    },
    {
      name: 'Bootstrap',
      url: 'http://getbootstrap.com/'
    },
    {
      name: 'Less',
      url: 'http://lesscss.org/'
    },
    {
      name: 'React',
      url: 'https://reactjs.org/'
    },
    {
      name: 'Node.js',
      url: 'https://nodejs.org/'
    },
    {
      name: 'Webpack',
      url: 'https://webpack.js.org/'
    },
    {
      name: 'Gulp',
      url: 'https://gulpjs.com/'
    },
    {
      name: 'Express',
      url: 'http://expressjs.com/'
    },
    {
      name: 'Koa',
      url: 'https://koajs.com/'
    },
    {
      name: 'Yeoman',
      url: 'https://yeoman.io/'
    },
    {
      name: 'Git'
    },
    {
      name: 'Java'
    },
    {
      name: 'SQL'
    },
    {
      name: 'QUnit',
      url: 'https://qunitjs.com/'
    },
    {
      name: 'Karma',
      url: 'http://karma-runner.github.io/latest/index.html'
    }
  ]
};

export default data;
