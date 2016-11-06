import React, { Component } from 'react';

import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>
          React simple starter
        </p>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
