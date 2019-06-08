import React, { Component } from 'react';

export default class WorkAreaCanvas extends Component {
  render() {
    return (
      <div className="workarea-canvas">
        {this.props.children}
      </div>
    );
  }
}
