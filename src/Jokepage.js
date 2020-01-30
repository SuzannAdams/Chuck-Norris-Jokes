import React, { Component } from 'react';
import './App.css';
//the Jokepage should be where the jokes are at with the New Joke button.
class Jokepage extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.callToApi}>New Joke</button>
        {this.props.joke && <p>{this.props.joke}</p>}
      </div>
    );
  }
}

export default Jokepage;
