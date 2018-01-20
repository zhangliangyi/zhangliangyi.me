import React, {Component} from 'react';
import {SectionHeader} from 'Components';
import locationImage from '../../images/location.jpg';

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
      <div className="text-center py-5">
        <SectionHeader header="location"/>
        <img className="mw-100" src={locationImage} alt={text}/>
        <p>{text}</p>
      </div>
    );
  }
}
