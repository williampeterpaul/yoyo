import React from 'react';

const version = require("../../package.json").version;

const Footer = () => {
  return (
    <div className="footer-right">
      version {version}
    </div>
  );
};

export default Footer;
