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
      <div class="artist__content">
        <div class="artist__header">
          <div class="artist__info">
            <div class="artist__info__meta">
              <div class="artist__info__type">yoyo - Youtube mp3 Downloader</div>
              <div class="artist__info__name">Settings</div>
            </div>
          </div>
        </div>
        <h1 className="section-title">Your email addy</h1>
        <p>{this.state.configuration.settings.email}</p>
      </div>
    );
  }
}
