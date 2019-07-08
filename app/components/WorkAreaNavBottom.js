import React from 'react';

const WorkAreaNavBottom = () => (
  <div className="workarea-nav-bottom navigation__list">
    <div class="navigation__list__header" href="#yourMusic">
      Your Music
      </div>
    <div>
      <a href="#" class="navigation__list__item">
        <i class="ion-headphone"></i>
        <span>Songs</span>
      </a>
      <a href="#" class="navigation__list__item">
        <i class="ion-ios-musical-notes"></i>
        <span>Albums</span>
      </a>
      <a href="#" class="navigation__list__item">
        <i class="ion-person"></i>
        <span>Artists</span>
      </a>
      <a href="#" class="navigation__list__item">
        <i class="ion-document"></i>
        <span>Local Files</span>
      </a>
    </div>
  </div>
);

export default WorkAreaNavBottom;
