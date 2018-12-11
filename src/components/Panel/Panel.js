import React, {Component} from 'react';

export default class Panel extends Component {
  render() {
    return (
      <div className="SAOPanel">
        {
          this.props.showHeader !== false &&
          <header className="SAOPanelHeader p-4">{this.props.header}</header>
        }

        <div className="SAOPanelBody p-4">{this.props.content}</div>

        {
          this.props.showFooter === true &&
          <footer className="SAOPanelFooter p-4">{this.props.footer}</footer>
        }

      </div>
    );
  }
}
