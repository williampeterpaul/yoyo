import React, { Component } from 'react';
import WorkAreaNav from './WorkAreaNav';
import WorkAreaCanvas from './WorkAreaCanvas';

export default class WorkArea extends Component {
  render() {
    return (
      <div className="workarea">
        <WorkAreaNav />
        <WorkAreaCanvas>
          {this.props.children}
        </WorkAreaCanvas>
      </div>
    );
  }
}
