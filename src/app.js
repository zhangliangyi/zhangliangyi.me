import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
  Panel,
  Menu,
  Tabs,
  NamePlate
} from 'Components';

import data from './data';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.less';

function createLeftPanelHeader() {
  return (
    <NamePlate name="Zhang, Liangyi" birthday="19851017"/>
  )
}

function createLeftPanelContent() {
  const tabItems = ['status', 'equipments', 'skills'];

  return (
    <div>
      <Tabs items={tabItems}/>
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <div>
        <div className="col-5">
          <Panel showFooter="false"
                 header={createLeftPanelHeader()}
                 content={createLeftPanelContent()}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
