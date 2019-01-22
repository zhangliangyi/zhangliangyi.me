import React, {Component} from 'react';
import {
  Profile,
  Experience,
  Contribution
} from 'Components';

export default class Body extends Component {
  render() {
    const profile = {
      name: this.props.data.name,
      name2: this.props.data.name2,
      bio: this.props.data.bio,
      job: this.props.data.job,
      company: this.props.data.company,
      work: this.props.data.work,
      gender: this.props.data.gender,
      location: this.props.data.location,
      career: this.props.data.career
    };

    return (
      <div>
        <Profile profile={profile}/>
        <Experience exps={this.props.data.experiences}/>
        <Contribution projects={this.props.data.openSources}/>
      </div>
    );
  }
}
