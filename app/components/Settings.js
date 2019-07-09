import React, { Component } from 'react';

const configuration = require('../modules/configuration');

export default class Settings extends Component {
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
      <section className="section-title">
        <h1>What is up this is the settings</h1>
        <p>{this.state.configuration.settings.email}</p>
      </section>
    );
  }
}
