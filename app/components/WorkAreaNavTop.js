import React from 'react';

const WorkAreaNavTop = () => (
    <div className="workarea-nav-top navigation__list">
      <div class="navigation__list__header" href="#main">
        Main
      </div>
      <div id="main">
        <a href="#" class="navigation__list__item">
        <i class="ion-ios-browsers"></i>
        <span>Browse</span>
        </a>
        <a href="#" class="navigation__list__item">
        <i class="ion-person-stalker"></i>
        <span>Activity</span>
        </a>
        <a href="#" class="navigation__list__item">
        <i class="ion-radio-waves"></i>
        <span>Radio</span>
        </a>
      </div>
    </div>
);

export default WorkAreaNavTop;
