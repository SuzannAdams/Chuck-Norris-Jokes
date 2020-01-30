import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
//Homepage connects to Jokepage and Aboutpage
class Homepage extends Component {
  render() {
    return (
      <div>
        <Link to="/jokes">
          <h1>Show Me a Joke</h1>
        </Link>
        <p>
          "As six-time world karate champion and then a movie star, I put too
          much trust in who I was, what I could do, and what I acquired. I
          forgot how much I needed others and especially God." Chuck Norris
        </p>
        <Link to="/about">
          <h1>About</h1>
        </Link>
        <p>
          "A lot of people give up just before they're about to make it. You
          know you never know when that next obstacle is going to be the last
          one." Chuck Norris
        </p>
      </div>
    );
  }
}

export default Homepage;
