import React, { Component } from 'react';
import './App.css';

class Aboutpage extends Component {
  render() {
    return (
      <div>
        <Link to="/jokes">About Page</Link>
        <img src="http://statusmind.com/images/2013/08/Famous-Facebook-Status-20558.jpg" />
        <button onClick={this.handleClick}>Click me</button>
        <p>
          About the Developer: Suzann Adams, a Southern California Educator
          turned Software Developer in six weeks time. It's still the beginning
          of the Developer's journey for her, hopefully this website that's
          dedicated to the multitalented American icon, Chuck Norris, will
          inspire you and make you smile.
        </p>
        <p>
          Quotes from: https://quotes.thefamouspeople.com/chuck-norris-3721.php
        </p>
        <p>
          Image from:
          https://fox17.com/news/local/chuck-norris-kicking-his-way-to-bubba-fest-in-tennessee
        </p>
        <p>Image from: www.StatusMind.com</p>
      </div>
    );
  }
}

export default Aboutpage;
