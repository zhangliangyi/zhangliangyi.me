import React, {Component} from 'react';

export default class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0
    };
  }

  render() {
    return (
      <ul className="SAOTabs nav justify-content-center">
        {this.props.items.map((item, index) =>
          <li className="SAOTab nav-item">
            <a className={`nav-link ${this.state.selected === index ? 'active': ''}`}
               href="#">{item}</a>
          </li>
        )}
      </ul>
    )
  }
}
