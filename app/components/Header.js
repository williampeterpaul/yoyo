import React from 'react';
import HeaderRight from './HeaderRight';
import HeaderMiddle from './HeaderMiddle';
import HeaderLeft from './HeaderLeft';

const Header = () => {
  return (
    <div className="header">
      <HeaderLeft />
      <HeaderMiddle />
      <HeaderRight />
    </div>
  );
};

export default Header;
