import React from 'react';

const version = require('../../package.json').version;

const Footer = () => (
    <div className="footer-right">
      Version {version}
    </div>
);

export default Footer;
