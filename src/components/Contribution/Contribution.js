import React, {Component} from 'react';
import contributionImage from '../../images/contribution.png';

function getProjectTypeClass(type) {
  switch (type) {
    case 'client':
      return 'icon-desktop';

    case 'web':
    default:
      return 'icon-chrome';
  }
}

export default class Contribution extends Component {
  render() {
    return (
      <div className="contribution mx-md-5">
        <h4 className="text-secondary mt-5 bold-title">Enterprise Contribution</h4>

        <div className="text-center">
          <img className="img-fluid m-auto" alt="contribution" src={contributionImage}/>
        </div>

        <h4 className="text-secondary mt-5 bold-title">Open Source Contribution</h4>

        <ul className="list-unstyled mt-4">
          {
            this.props.projects.map((project, index) =>
              <li className="mb-4 d-flex flex-row" key={index}>
                <i className={`mr-4 text-secondary project-type-icon ${getProjectTypeClass(project.type)}`}/>

                <div>
                  <h5 className="bold-title">
                    {
                      project.url ? <a href={project.url} target="_blank">{project.name}</a> : project.name
                    }

                    {
                      !project.released &&
                      <small><span className="badge badge-secondary ml-2 thin-text">Still Working</span></small>
                    }
                  </h5>
                  <h6 className="text-secondary">{project.desc}</h6>
                </div>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}


