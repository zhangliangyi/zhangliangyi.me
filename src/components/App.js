'use strict';

define('components/App', ['react'], function (React) {

  function App() {
    this.AppView = React.createClass({
      render: function () {
        return (
          <div>
            <p>Hello, React!</p>
          </div>
        );
      }
    });
  }

  App.prototype.init = function () {
    React.render(<this.AppView />, document.body);
  };

  return App;
});
