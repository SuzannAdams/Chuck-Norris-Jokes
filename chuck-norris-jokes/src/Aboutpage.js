import React, { Component } from 'react';
import './App.css';

class Aboutpage extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <p>
          About the Developer: Suzann Adams, a Southern California Educator
          turned Software Developer in six weeks time. It's still the beginning
          of the Developer's journey for her, hopefully this website that's
          dedicated to the inspirational Chuck Norris will inspire you and make
          you smile.
        </p>
        <p>
          Quotes from: https://quotes.thefamouspeople.com/chuck-norris-3721.php
        </p>
        <p>
          Image from:
          https://fox17.com/news/local/chuck-norris-kicking-his-way-to-bubba-fest-in-tennessee
        </p>
      </div>
    );
  }
}

export default Aboutpage;
