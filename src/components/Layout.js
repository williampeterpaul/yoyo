import React, { Component } from "react";
import { Sidebar } from './Sidebar';

export class Layout extends Component {

  render() {
    return (
      <section>
        <header class="titlebar" />
        <Sidebar />
        {this.props.children}
      </section>
    );
  }
}