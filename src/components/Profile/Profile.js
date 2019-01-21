import React, {Component} from 'react';
import CircularProgressbar from 'react-circular-progressbar';

function getSummary(job, company, work) {
  return (
    <span>
      {job} at&nbsp;
      <span className="text-primary">{company}</span>
      &nbsp;working on&nbsp;
      <span className="text-warning">{work}</span>
    </span>
  );
}

function getCareerYear(career) {
  const careerStart = new Date(career);
  const current = new Date();

  let careerStartYear = careerStart.getFullYear();
  let careerStartMonth = careerStart.getMonth();
  let currentYear = current.getFullYear();
  let currentMonth = current.getMonth();

  let yearOffset = 0;

  if (currentMonth < careerStartMonth) {
    yearOffset = 1;
  }

  return currentYear - careerStartYear - yearOffset;
}

function getCareerPercent(career) {
  const careerStart = new Date(career);
  const current = new Date();

  let careerStartMonth = careerStart.getMonth();
  let currentYear = current.getFullYear();
  let currentMonth = current.getMonth();

  let lastAnniversary, nextAnniversary;

  if (currentMonth >= careerStartMonth) {
    lastAnniversary = new Date(currentYear, careerStartMonth, 1);
    nextAnniversary = new Date(currentYear + 1, careerStartMonth, 1);
  } else {
    lastAnniversary = new Date(currentYear - 1, careerStartMonth, 1);
    nextAnniversary = new Date(currentYear, careerStartMonth, 1);
  }

  return (((current.getTime() - lastAnniversary.getTime()) * 100) / (nextAnniversary.getTime() - lastAnniversary.getTime()));
}

export default class Profile extends Component {
  render() {
    const job = this.props.profile.job;
    const company = this.props.profile.company;
    const work = this.props.profile.work;

    return (
      <div className="pt-5 pb-2 profile border-bottom">
        <header className="text-center profile-header pb-4">
          <div className="rounded-circle bg-secondary profile-avatar my-4 mx-auto">

          </div>

          <h1>{this.props.profile.name}<small>{this.props.profile.name2}</small></h1>
          <h3 className="text-secondary profile-subtitle">{getSummary(job, company, work)}</h3>

          <h2 className="bio">{this.props.profile.bio}</h2>
        </header>

        <div className="row pt-4">
          <section className="col-lg-3 col-sm-6 text-center">
            <article className="pt-4 text-primary profile-tile">
              <i className="icon-male mb-2 profile-tile-icon"/>
              <p className="profile-tile-title">{this.props.profile.gender}</p>
            </article>
          </section>

          <section className="col-lg-3 col-sm-6 text-center">
            <article className="pt-4 text-danger profile-tile">
              <i className="icon-balance-scale mb-2 profile-tile-icon"/>
              <p className="profile-tile-title">Libra</p>
            </article>
          </section>

          <section className="col-lg-3 col-sm-6 text-center">
            <article className="pt-4 text-secondary profile-tile">
              <i className="icon-location mb-2 profile-tile-icon"/>
              <p className="profile-tile-title">{this.props.profile.location}</p>
            </article>
          </section>

          <section className="col-lg-3 col-sm-6 text-center">
            <article className="pt-4 text-info profile-tile">
              <CircularProgressbar className="profile-percentage"
                                   percentage={getCareerPercent(this.props.profile.career)}
                                   text={`${getCareerYear(this.props.profile.career)} yrs`}/>
              <p className="profile-tile-title">Working</p>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
