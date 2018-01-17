import React, {Component} from 'react';
import {SectionHeader} from "Components";

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: props.city,
      country: props.country
    };
  }

  render() {
    let text = this.state.city + ', ' + this.state.country;
    return (
      <div className="text-center py-4">
        <SectionHeader icon="map-marker" header={text}/>
        <p className="text-secondary text-bold text-uppercase">{text}</p>
      </div>
    );
  }
}
