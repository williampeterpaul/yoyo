import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { App } from './components/App';

import './assets/css/electron-support.css';

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
document.body.className = 'is-preload';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
