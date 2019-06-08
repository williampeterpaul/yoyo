import React, { Component } from 'react';
import Header from './Header';
import WorkArea from './WorkArea';
import Footer from './Footer';

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <Header />
          <WorkArea />
          <Footer />
        </div>
      </div>
    );
  }
}
