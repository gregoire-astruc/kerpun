/** @jsx React.DOM */
(function (root, factory) {
  "use strict";
if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['react'], factory);
    } else {
      // Browser globals
      root.ReactKerpun = factory(root.React);
    }
}(this, function (React) {
  "use strict";
  var components = {};

  components.Release = React.createClass({
      render: function () {
        return (
          <div className="col-sm-3">
            <div className="panel panel-info">
              <div className="panel-heading">
                <h3 className="panel-title">{this.props.name}</h3>
              </div>
              <div className="panel-footer">
                <span className="label label-primary">{this.props.game}</span>
              </div>
            </div>
          </div>
          );
      }
    });

    components.ReleaseList = React.createClass({
      render: function () {
        return (
          <div className="row">
          {this.props.releases.map(function (release) {
            return (
              <components.Release
                key={release.url}
                name={release.name}
                game={release.game} />
              );
          })}
          </div>
        );
      }
    });

  return components;
}));
