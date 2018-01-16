import React, {Component} from 'react';

export default class SectionHeader extends Component {
  render() {
    return (
      <div className="text-muted text-uppercase text-center">
        <div className="section-icon-container m-auto text-secondary">
          <span className={`oi oi-${this.props.icon}`}
                title={this.props.header}/>
        </div>
      </div>
    );
  }
}
