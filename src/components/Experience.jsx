import React, {Component} from 'react';

class Experience extends Component {
  render() {
    const experienceList = this.props.experiences.map((exp) =>
      <a href="#"
         className="list-group-item list-group-item-action flex-column align-items-start"
         key={exp.company}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {exp.company}
            {exp.current && <span className="badge badge-primary mx-1">Current</span>}
          </h5>
          <small>{exp.duration}</small>
        </div>
        <p className="mb-1">{exp.title}</p>
        <small>{exp.description}</small>
      </a>
    );

    return (
      <div className="card my-2">
        <div className="card-header">
          Experience
        </div>
        <div className="card-body">
          <div className="list-group list-group-flush">
            {experienceList}
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
