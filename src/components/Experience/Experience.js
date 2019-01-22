import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';

function usedBadges(used) {
  if (!used || used.length === 0) {
    return '';
  }

  return (
    <div>
      {
        used.map((used, index) =>
          <span className="badge badge-info mr-1 exp-badge" key={index}>{used}</span>
        )
      }
    </div>
  );
}

function getExpYear(start) {
  const startDate = new Date(start);
  const currentDate = new Date();

  let startDateYear = startDate.getFullYear();
  let startDateMonth = startDate.getMonth();
  let currentDateYear = currentDate.getFullYear();
  let currentDateMonth = currentDate.getMonth();
  let yearOffset = 0;

  if (currentDateMonth < startDateMonth) {
    yearOffset = 1;
  }

  return currentDateYear - startDateYear - yearOffset;
}

function getExpYearPercent(start) {
  const startDate = new Date(start);
  const currentDate = new Date();

  let startDateMonth = startDate.getMonth();
  let currentDateYear = currentDate.getFullYear();
  let currentDateMonth = currentDate.getMonth();

  let nextDate, lastDate;

  if (currentDateMonth < startDateMonth) {
    lastDate = new Date(currentDateYear - 1, startDateMonth, 1);
    nextDate = new Date(currentDateYear, startDateMonth, 1);
  } else {
    lastDate = new Date(currentDateYear, startDateMonth, 1);
    nextDate = new Date(currentDateYear + 1, startDateMonth, 1)
  }

  return 100 - (nextDate.getTime() - currentDate.getTime()) * 100 / (nextDate.getTime() - lastDate.getTime());
}

export default class Experience extends Component {
  render() {
    return (
      <section className="py-2 exp">
        <ul className="list-unstyled exp-list">
          {
            this.props.exps.map(exp =>
              <li className="d-flex flex-row align-items-start justify-content-between exp-item ml-md-5" key={exp.id}>
                <div className="d-flex flex-row align-items-start">
                  <CircularProgressbar className="exp-time mr-5"
                                       percentage={exp.current ? getExpYearPercent(exp.start) : exp.percent}
                                       text={exp.current ? getExpYear(exp.start) : exp.year.toString()}
                                       styles={{
                                         text: {
                                           fontFamily: 'Titillium Web',
                                           fontSize: '3rem',
                                         }
                                       }}/>

                  <div>
                    <h5 className={`${exp.current ? 'text-primary exp-title-current' : ''} mt-0 exp-title bold-title`}>
                      {exp.name}
                    </h5>
                    <h6 className="mt-1 text-secondary exp-subtitle">{exp.title}</h6>

                    <div className="exp-body">
                      <div>
                        {
                          exp.projects && <strong>{exp.current ? 'Building' : 'Built'}</strong>
                        }

                        <ul className="list-unstyled project-list">
                          {
                            exp.projects && exp.projects.map((project, index) =>
                              <li className="project" key={`${exp.id}-${index}`}>
                                <i className="icon-award mr-2 text-secondary"/>
                                {project}
                              </li>
                            )
                          }
                        </ul>
                      </div>

                      <div className="mt-2">
                        {exp.projects && <strong>With</strong>}
                        {usedBadges(exp.used)}
                      </div>
                    </div>
                  </div>
                </div>

                <img className="exp-logo d-none d-md-block mr-5" alt={exp.name} src={exp.logo}/>
              </li>
            )
          }
        </ul>
      </section>
    );
  }
}
