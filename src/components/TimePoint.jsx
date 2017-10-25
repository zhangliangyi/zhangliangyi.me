import React, {Component} from 'react';

class TimePoint extends Component {
  render() {
    return (
      <div className="d-flex justify-content-end"
           style={{position: 'relative', bottom: '-2rem', right: '-2.5rem'}}>
        <small>{this.props.time}</small>
      </div>
    );
  }
}

export default TimePoint;
