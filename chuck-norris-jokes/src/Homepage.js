import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

class Homepage extends Component {
  // The homepage should have the image and inspirational quotes. I want the Homepage to connect to Jokepage when clicked
  render() {
    return (
      <div>
        <Link to="/jokes">Show Me a Joke</Link>
        <p>
          "I've always found that anything worth achieving will always have
          obstacles in the way and you've got to have that drive and
          determination to overcome those obstacles on route to whatever it is
          that you want to accomplish." Chuck Norris
        </p>
        <p>
          "A lot of people give up just before they're about to make it. You
          know you never know when that next obstacle is going to be the last
          one." Chuck Norris
        </p>
        <p>
          "As six-time world karate champion and then a movie star, I put too
          much trust in who I was, what I could do, and what I acquired. I
          forgot how much I needed others and especially God." Chuck Norris
        </p>
      </div>
    );
  }
}

export default Homepage;
