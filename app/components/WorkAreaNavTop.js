import React from 'react';

const WorkAreaNavTop = () => (
  <div className="workarea-nav-top navigation__list">
    <div class="navigation__list__header" href="#main">
      Main
      </div>
    <div id="main">
      <a href="#/" class="navigation__list__item">
        <i class="ion-home"></i>
        <span>Home</span>
      </a>
      <a href="#/About" class="navigation__list__item">
        <i class="ion-help"></i>
        <span>About</span>
      </a>
      <a href="#/Bugs" class="navigation__list__item">
        <i class="ion-bug"></i>
        <span>Bugs</span>
      </a>
      <a href="#/Settings" class="navigation__list__item">
        <i class="ion-settings"></i>
        <span>Settings</span>
      </a>
    </div>
  </div>
);

export default WorkAreaNavTop;
