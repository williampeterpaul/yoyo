import React, { Component } from 'react';
import { Route } from 'react-router';

import Layout from './Layout';
import Tracks from './Tracks';
import Playlists from './Playlists';
import Settings from './Settings';
import About from './About';
import Bugs from './Bugs';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Tracks} />
        <Route exact path="/playlists" component={Playlists} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/about" component={About} />
        <Route exact path="/bugs" component={Bugs} />
      </Layout>
    );
  }
}
