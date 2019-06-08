import React, { Component } from 'react';
import { Sidebar } from './Sidebar';

export class Layout extends Component {
  render() {
    return (
      <section>
        <header className="titlebar" />
        <Sidebar />
        {this.props.children}
      </section>
    );
  }
}
