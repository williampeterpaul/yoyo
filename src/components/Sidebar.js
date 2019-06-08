import React, { Component } from 'react';

export class Sidebar extends Component {
  render() {
    return (
      <section id="sidebar">
        <div class="inner">
          <nav>
            <ul>
              <li><a href="#intro">Intro</a></li>
              <li><a href="#one">What we do</a></li>
              <li><a href="#two">App Settings</a></li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}
