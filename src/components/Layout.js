import React, { Component } from 'react';

export class Layout extends Component {
  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
}
