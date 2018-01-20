import React, {Component} from 'react';
import 'dmak';
import '../../images/avatar.jpg';
import '../../images/05f35.svg';
import '../../images/06bc5.svg';
import '../../images/0826f.svg';

export default class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '張良毅'
    };
  }

  render() {
    return (
      <div className="text-center py-5">
        <img className="rounded-circle my-4 avatar"
             src="/build/images/avatar.jpg"
             alt="Avatar"/>
        <h1 id="zhangliangyi"/>
        <h1><small>Jacob Zhang</small></h1>
        <h2 className="text-secondary mb-5">
          <small>Front-end Engineer at SAP working with <span className="text-primary">JavaScript</span></small>
        </h2>
      </div>
    );
  }

  componentDidMount() {
    new window.Dmak(this.state.name, {
      element: 'zhangliangyi',
      uri: '/build/fonts/',
      grid: {
        show: false
      },
      step: 0.005,
      stroke: {
        attr: {
          active: '#FF6865',
          stroke: '#666'
        }
      }
    });
  }
}
