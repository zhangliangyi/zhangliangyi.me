import React, {Component} from 'react';
import {
  SectionHeader
} from 'Components';

import gunplaImage from '../../images/gundam.jpg';
import gameImage from '../../images/game.png';
import codingImage from '../../images/coding.png';

export default class Hobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {
        gunpla: gunplaImage,
        game: gameImage,
        coding: codingImage
      }
    };
  }

  render() {
    return (
      <div className="text-center py-4">
        <SectionHeader icon="heart" header="Hobby"/>
        <div className="row">
          {
            this.props.hobbies.map((hobby, index) => (
              <div className="col p-md-4" key={index}>
                <img className="rounded-circle hobby-image" src={this.state.images[hobby.name]}/>
                <p className="text-bold text-secondary">{hobby.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
