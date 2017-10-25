import React, {Component} from 'react';

class Header extends Component {
  render() {
    const links = this.props.links;
    const linkControls = links.map((link, i) =>
      <a className={`text-info ${i === links.length - 1 ? '' : 'mr-4'}`}
         href={link.href}
         key={link.id}
         target="_blank">
        {link.text}
      </a>
    );
    return (
      <nav className="navbar navbar-light bg-transparent justify-content-end">
        <div>
          {linkControls}
        </div>
      </nav>
    )
  }
}

export default Header;