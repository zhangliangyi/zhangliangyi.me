import React, {Component} from 'react';
import {
  SectionHeader
} from 'Components';

import gunplaImage from '../../images/gundam.jpg';
import gameImage from '../../images/game.png';
import codingImage from '../../images/coding.png';
import basketballImage from '../../images/basketball.png';

export default class Hobby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: {
        gunpla: gunplaImage,
        game: gameImage,
        coding: codingImage,
        basketball: basketballImage
      }
    };
  }

  render() {
    return (
      <div className="text-center py-5">
        <SectionHeader header="Hobby"/>
        <div className="row mt-4">
          {
            this.props.hobbies.map((hobby, index) => (
              <div className="col px-md-4" key={index}>
                <img className="rounded-circle hobby-image" src={this.state.images[hobby.name]}/>
                <p className="text-secondary my-2">{hobby.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
