import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-transparent justify-content-end">
        <div>
          <a className="text-info mx-4" href="https://github.com/zhangliangyi">Github</a>
          <a className="text-info" href="https://www.linkedin.com/in/zhangliangyi/">Linkedin</a>
        </div>
      </nav>
    )
  }
}

export default Header;
