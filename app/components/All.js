import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class All extends Component {
  render() {
    return (
      <section id="all">
        <h1>What is up this is the all</h1>
        <ReactPlayer url="http://www.archive.org/download/PhantomPlanet/classicscifiphantomplanet1_512kb.mp4" controls />
      </section>
    );
  }
}
