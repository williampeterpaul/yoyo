import React from 'react';
import WorkAreaNav from './WorkAreaNav';
import WorkAreaCanvas from './WorkAreaCanvas';

const WorkArea = () => {
  return (
    <div className="workarea">
      <WorkAreaNav />
      <WorkAreaCanvas />
    </div>
  );
};

export default WorkArea;
