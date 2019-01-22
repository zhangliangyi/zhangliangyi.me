import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    const links = this.props.data.links;

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
        <div className="head-link">
          {linkControls}
        </div>
      </nav>
    );
  }
}
