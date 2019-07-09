import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './components/App';

import './assets/css/bootstrap.css'
import './assets/css/roboto.css'
import './assets/css/ionicons.css'
import './assets/css/electron.css';
import './assets/css/flex.css';
import './assets/css/style.css'

import './assets/fonts/ionicons.eot'
import './assets/fonts/ionicons.svg'
import './assets/fonts/ionicons.ttf'
import './assets/fonts/ionicons.woff'

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
