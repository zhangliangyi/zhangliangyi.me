import React, {Component} from 'react';

class Experience extends Component {
  render() {
    const experiences = this.props.experiences;
    const experienceList = experiences.map((exp) =>
      <li className="media mt-5" key={exp.name}>

        <img src={exp.logo} alt={exp.name} className="d-flex mr-3 align-self-start"/>

        <div className="media-body">
          <div className="d-flex justify-content-between align-self-center">
            <h5 className="mt-0 mb-1">
              {exp.name}
              {exp.current && <span className="badge badge-primary mx-1">Current</span>}
            </h5>
            <small>{exp.duration}</small>
          </div>

          <p className="mb-1">{exp.title}</p>

          <small>{exp.description}</small>
        </div>
      </li>
    );

    return (
      <div className="card border-0 my-4">
        <div className="card-body">
          <h4 className="card-title text-secondary">Where I have worked</h4>
          <ul className="list-unstyled my-0">
            {experienceList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
