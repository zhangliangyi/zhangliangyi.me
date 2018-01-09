import React, {Component} from 'react';

export default class Experience extends Component {
  render() {
    return (
      <div className="mt-5">
        <h3 className="text-muted text-uppercase small text-center mb-4">Experience</h3>
        <ul className="timeline position-relative">
          {
            this.props.experiences.map((item, index) => (
              <li className={`card ${index === 0 ? '' : 'mt-5'} border-0 text-center`} key={index}>
                <img className="card-img-top rounded-circle company-logo" src={item.image}/>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted job-title">{item.subtitle}</h6>
                  <p className="card-text small">{item.description}</p>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
