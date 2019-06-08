import React, { Component } from 'react';
import { Route } from "react-router";
import { Layout } from "./Layout";
import { Main } from "./Main";
import { Settings } from "./Settings";

export class App extends Component {

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Main} />
        <Route exact path="/settings" component={Settings} />
      </Layout>
    );
  }
}
