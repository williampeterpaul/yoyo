import React from 'react';
import WorkAreaNavTop from './WorkAreaNavTop';
import WorkAreaNavMiddle from './WorkAreaNavMiddle';
import WorkAreaNavBottom from './WorkAreaNavBottom';

const WorkAreaNav = () => (
    <div className="workarea-nav">
      <WorkAreaNavTop />
      <WorkAreaNavMiddle />
      <WorkAreaNavBottom />
    </div>
);

export default WorkAreaNav;
