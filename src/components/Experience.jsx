import React, {Component} from 'react';

import TimePoint from './TimePoint.jsx';

class Experience extends Component {
  render() {
    const experiences = this.props.experiences;
    const experienceList = experiences.map((exp) =>
      <li className="mt-5" key={exp.name}>
        <div className="row align-items-end">
          <div className="col-2">
            <TimePoint time={exp.start}/>
          </div>

          <div className="col-10 border border-secondary border-top-0 border-bottom-0 border-right-0">
            <div className="d-flex flex-wrap">
              <img src={exp.logo} alt={exp.name} className="d-flex ml-4 align-self-start my-2"/>

              <div className="ml-4">
                <div className="d-flex align-self-center">
                  <h5 className="mt-0 mb-1">
                    {exp.name}
                    {exp.current && <span className="badge badge-primary mx-1" style={{position: 'absolute', top: '-2rem', left: '-1.75rem'}}>NOW</span>}
                  </h5>

                </div>

                <p className="mb-1">{exp.title}</p>

                <small>{exp.description}</small>
              </div>
            </div>
          </div>
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
