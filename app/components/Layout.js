import React, { Component } from 'react';
import WorkArea from './WorkArea';
import Footer from './Footer';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="layout">
          <WorkArea>
            {this.props.children}
          </WorkArea>
          <Footer />
        </div>
      </div>
    );
  }
}
