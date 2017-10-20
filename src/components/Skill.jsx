import React, {Component} from 'react';

import FrontendImg from '../images/frontend.png';
import BackendImg from '../images/backend.png';
import UtilImg from '../images/utility.png';

class Skill extends Component {
  render() {
    const skills = this.props.skills;
    const skillsGroupByType = {};

    for (let skill of skills) {
      if (!skillsGroupByType[skill.type]) {
        skillsGroupByType[skill.type] = [];
      }

      skillsGroupByType[skill.type].push(skill);
    }

    return (
      <div className="card border-0 my-4">
        <div className="card-body">
          <h5 className="card-title text-secondary">What I am interested in</h5>
          <div className="row">
            <div className="col-md-4 mt-4">
              <div className="card border-0">
                <img className="card-img-top w-50 m-auto" src={FrontendImg} alt="Card image cap"/>
                <div className="card-body h5">
                  {skillsGroupByType.frontend.map((skill) =>
                    <span className="badge badge-pill badge-primary m-1">{skill.text}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card border-0">
                <img className="card-img-top w-50 m-auto" src={BackendImg} alt="Card image cap"/>
                <div className="card-body h5">
                  {skillsGroupByType.backend.map((skill) =>
                    <span className="badge badge-pill badge-success m-1">{skill.text}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="card border-0">
                <img className="card-img-top w-50 m-auto" src={UtilImg} alt="Card image cap"/>
                <div className="card-body h5">
                  {skillsGroupByType.util.map((skill) =>
                    <span className="badge badge-pill badge-info m-1">{skill.text}</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
