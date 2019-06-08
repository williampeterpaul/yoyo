import React, { Component } from 'react';

export class Sidebar extends Component {
  render() {
    return (
      <section id="sidebar">
        <div class="inner">
          <nav>
            <ul>
              <li><a href="#/">Main</a></li>
              <li><a href="#/settings">Settings</a></li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}
