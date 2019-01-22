const data = {
  name: '张良毅',
  name2: 'Jacob Zhang',
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
      id: 'sap',
      type: 'work',
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
      id: 'cisco',
      type: 'work',
      name: 'Cisco Systems',
      year: 0,
      percent: 50,
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
      id: 'icbc',
      type: 'work',
      name: 'ICBC Software Development Center',
      year: 5,
      percent: 25,
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/33/Industrial_and_Commercial_Bank_of_China_logo.svg',
      title: 'Software Developer - Sr. Software Developer',
      projects: [
        'B/S Web Applications in Operational Risk Management'
      ],
      used: [
        'jQuery',
        'Java',
        'SQL'
      ]
    },
    {
      id: 'sjtu',
      type: 'education',
      name: 'Shanghai Jiao Tong University',
      year: 4,
      percent: 0,
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/da/Sjtu-logo-standard-red.png',
      title: 'Bachelor of Engineer, Information Security'
    }
  ],

  openSources: [
    {
      name: 'zhangliangyi.me',
      type: 'web',
      desc: 'My personal page powered by Github page',
      url: 'https://github.com/zhangliangyi/zhangliangyi.me',
      released: true
    },
    {
      name: 'haven',
      type: 'client',
      desc: 'Http archive viewer with Electron',
      released: false
    }
  ]
};

export default data;
