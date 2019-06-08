import React, { Component } from 'react';
import { Route } from 'react-router';

import Settings from './Settings';
import Layout from './Layout';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Main} />
        <Route exact path="/settings" component={Settings} />
      </Layout>
    );
  }
}
