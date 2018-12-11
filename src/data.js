const data = {
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

  location: {
    country: 'China',
    city: 'Shanghai'
  },

  hobbies: [
    {name: 'gunpla', text: 'GUNPLA'},
    {name: 'game', text: 'Game'},
    {name: 'coding', text: 'Coding'},
    {name: 'basketball', text: 'Basketball'}
  ],

  experiences: [
    {
      index: 3,
      start: '2014/04',
      image: 'https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg',
      title: 'SAP China Lab',
      current: true,
      subtitle: 'Lead UI Engineer'
    },
    {
      index: 2,
      start: '2013/10',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Cisco_logo.svg/200px-Cisco_logo.svg.png',
      title: 'Cisco Systems',
      subtitle: 'Software Engineer'
    },
    {
      index: 1,
      start: '2008/07',
      image: 'https://upload.wikimedia.org/wikipedia/en/3/33/Industrial_and_Commercial_Bank_of_China_logo.svg',
      title: 'ICBC Software Development Center',
      subtitle: 'Software Developer - Sr. Software Developer'
    },
    {
      index: 0,
      start: '2004/09',
      image: 'https://upload.wikimedia.org/wikipedia/en/d/da/Sjtu-logo-standard-red.png',
      title: 'Shanghai Jiao Tong University',
      subtitle: 'Bachelor of Engineer, Information Security',
    }
  ],

  skills: [
    {
      name: 'frontend',
      value: 21,
      items: [
        {name: 'jQuery', value: 4},
        {name: 'SAPUI5/OpenUI5', value: 4},
        {name: 'Angular', value: 3},
        {name: 'Bootstrap', value: 3},
        {name: 'Less/Sass', value: 3},
        {name: 'React', value: 2},
        {name: 'ES6', value: 2}
      ]
    },
    {
      name: 'backend',
      value: 10,
      items: [
        {name: 'Node.js', value: 3},
        {name: 'Express', value: 3},
        {name: 'Restful', value: 3},
        {name: 'Java', value: 1}
      ]
    },
    {
      name: 'database',
      value: 7,
      items: [
        {name: 'SQL', value: 3},
        {name: 'Oracle', value: 2},
        {name: 'MongoDB', value: 2}
      ]
    },
    {
      name: 'tool',
      value: 11,
      items: [
        {name: 'Git', value: 3},
        {name: 'Gulp', value: 3},
        {name: 'Yeoman', value: 3},
        {name: 'Webpack', value: 2}
      ]
    }
  ]
};


export default data;
