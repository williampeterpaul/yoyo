import React, { Component } from 'react';
import { Route } from 'react-router';

import Layout from './Layout';
import Main from './Main';
import Settings from './Settings';
import About from './About';
import All from './All';
import Bugs from './Bugs';
import Favourites from './Favourites';
import Rated from './Rated';
import Recents from './Recents';
import Support from './Support';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path="/" component={Main} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/about" component={About} />
        <Route exact path="/all" component={All} />
        <Route exact path="/bugs" component={Bugs} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/rated" component={Rated} />
        <Route exact path="/recents" component={Recents} />
        <Route exact path="/support" component={Support} />
      </Layout>
    );
  }
}
