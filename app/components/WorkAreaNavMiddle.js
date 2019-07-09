import React from 'react';

const WorkAreaNavMiddle = () => (
  <div className="workarea-nav-middle navigation__list">
    <div class="navigation__list__header" href="#yourMusic">
      Your Music
      </div>
    <div>
      <a href="#/Playlists" class="navigation__list__item">
        <i class="ion-ios-musical-notes"></i>
        <span>Playlists</span>
      </a>
      <a href="#" class="navigation__list__item">
        <i class="ion-document"></i>
        <span>Local Files</span>
      </a>
    </div>
  </div>
);

export default WorkAreaNavMiddle;
