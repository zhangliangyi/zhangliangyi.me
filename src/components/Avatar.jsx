import React, {Component} from 'react';

class Avatar extends Component {
  render() {
    return (
      <div className="text-center border border-light border-top-0 border-left-0 border-right-0 py-4">
        <img className="rounded-circle my-4"
             src="https://media-exp1.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAjQAAAAJGZmYzNiNWJkLTBjNzUtNDA2Zi05M2IwLWMzNWJlMjBhYzc1OQ.jpg"/>
        <h1>Zhang, Liangyi</h1>
        <h2 className="text-secondary">
          <small>UI Engineer at SAP working on <span className="text-primary">JavaScript</span></small>
        </h2>
      </div>
    );
  }
}

export default Avatar;
