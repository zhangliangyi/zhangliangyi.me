import React, {Component} from 'react';

export default class SectionHeader extends Component {
  render() {
    return (
      <div className="text-muted text-uppercase text-center section-header">
        <h3 className="small text-bold text-secondary position-relative d-inline-block px-4 bg-white">
          {this.props.header}
        </h3>
        <hr/>
      </div>
    );
  }
}
