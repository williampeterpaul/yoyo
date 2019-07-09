import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div class="artist__content">
        <div class="artist__header">
          <div class="artist__info">
            <div class="artist__info__meta">
              <div class="artist__info__type">yoyo - Youtube mp3 Downloader</div>
              <div class="artist__info__name">Welcome</div>
            </div>
          </div>
          <div class="artist__listeners">
            <div class="artist__listeners__count">15,810</div>
            <div class="artist__listeners__label">Active Users</div>
          </div>
        </div>
        <h1 className="section-title">Enter a youtube link to get started</h1>
      </div>
    );
  }
}
