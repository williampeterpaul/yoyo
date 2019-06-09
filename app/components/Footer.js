import React from 'react';

import FooterRight from './FooterRight';
import FooterLeft from './FooterLeft';
import FooterMiddle from './FooterMiddle';

const Footer = () => (
    <div className="footer">
      <FooterLeft />
      <FooterMiddle />
      <FooterRight />
    </div>
);

export default Footer;
