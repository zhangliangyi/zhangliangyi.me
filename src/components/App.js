'use strict';

var React = require('react');
var Section = require('./Section');

class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Section/>
      </main>
    );
  }
}

module.exports = App;
