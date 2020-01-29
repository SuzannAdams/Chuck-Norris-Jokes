import React, { Component } from 'react';
import './App.css';

class Jokepage extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Jokepage;
