import React, {Component} from 'react';
import contributionImage from '../../images/contribution.png';

export default class Contribution extends Component {
  render() {
    return (
      <div className="text-center contribution mt-5">
        <h4 className="text-secondary">Contribution in Github Enterprise</h4>
        <img className="img-fluid" alt="contribution" src={contributionImage}/>
      </div>
    );
  }
}


