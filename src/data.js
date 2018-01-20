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
      image: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/AAEAAQAAAAAAAAogAAAAJDFhOGIxNWI5LWI0YWQtNDYyYy1hNjlhLWQ0M2ZiYmZjZjIxYw.png',
      title: 'SAP China Lab',
      current: true,
      subtitle: 'Senior UI Engineer'
    },
    {
      index: 2,
      start: '2013/10',
      image: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/AAIA_wDGAAAAAQAAAAAAAAroAAAAJDcwNWMyNjYxLTdiMDMtNDliOS1iYmQxLTk1Zjk4NjdmYzM3OA.png',
      title: 'Cisco System',
      subtitle: 'Software Engineer'
    },
    {
      index: 1,
      start: '2008/07',
      image: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/p/1/000/031/14d/099d1fd.png',
      title: 'ICBC Software Development Center',
      subtitle: 'Software Developer - Sr. Software Developer'
    },
    {
      index: 0,
      start: '2004/09',
      image: 'https://media-exp1.licdn.com/mpr/mpr/shrink_75_75/p/6/005/007/3f8/3848bed.png',
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
