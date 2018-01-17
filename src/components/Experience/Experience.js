import React, {Component} from 'react';
import {SectionHeader} from 'Components';

export default class Experience extends Component {
  render() {
    return (
      <div className="mt-4 py-4">
        <SectionHeader header="experience" icon="clock"/>
        <ul className="timeline position-relative">
          {
            this.props.experiences.map((item, index) => (
              <li className={`card ${index === 0 ? '' : 'mt-5'} border-0 text-center`} key={index}>
                <img className="card-img-top rounded-circle company-logo" src={item.image}/>
                <div className="card-body">
                  <h5 className="card-title text-bold text-secondary text-uppercase">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted job-title">{item.subtitle}</h6>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
