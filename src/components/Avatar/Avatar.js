import React, {Component} from 'react';

import AvatarPhoto from "../../images/avatar.jpg";

export default class Avatar extends Component {
  render() {
    return (
      <div className="text-center py-4">
        <img className="rounded-circle my-4 avatar"
             src={AvatarPhoto}
             alt="Avatar"/>
        <h1>Zhang, Liangyi</h1>
        <h2 className="text-secondary">
          <small>Front-end Engineer at SAP working with <span className="text-primary">JavaScript</span></small>
        </h2>
      </div>
    );
  }
}
