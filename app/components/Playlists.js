import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <div class="media-cards">
        <a href="#/" class="media-card">
          <div class="media-card__image">
            <i class="ion-ios-play"></i>
          </div>
          <a class="media-card__footer">Hoodie Allen</a>
        </a>
        <a href="#/" class="media-card">
          <div class="media-card__image">
            <i class="ion-ios-play"></i>
          </div>
          <a class="media-card__footer">Woodie Allen</a>
        </a>
      </div>
    );
  }
}
