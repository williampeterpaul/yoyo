import React, { Component } from 'react';

const configuration = require('../modules/configuration');

export class Main extends Component {
  constructor(props) {
    super(props);

    if (configuration.existsAndValid()) {
      this.state = { configuration: configuration.getConfiguration() };
    } else {
      this.state = { configuration: configuration.getDefaultConfiguration() };
      configuration.setDefaultConfiguration();
    }
  }

  render() {
    return (
      <section id="main">
        <div class="inner">
          <h1>What is up this is the main</h1>
          <p>{this.state.configuration.settings.email}</p>
        </div>
      </section>
    );
  }
}
