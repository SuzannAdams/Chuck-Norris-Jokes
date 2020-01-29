import React, { Component } from 'react';
import './App.css';
//the Jokepage should be where the jokes are at with the New Joke button.
class Jokepage extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>New Joke</button>
      </div>
    );
  }
}

export default Jokepage;
