import React, { Component } from 'react';
import './App.css';

class Aboutpage extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <p>
          About the Developer: Suzann Adams, Educator turned Software Developer
          in six weeks time. It's still the beginning of the journey for her,
          hopefully this website that's dedicated to the inspirational Chuck
          Norris will inspire you and make you smile.
        </p>
        <p>
          Quotes from: https://quotes.thefamouspeople.com/chuck-norris-3721.php
        </p>
        <p>
          Image from:
          https://www.duffelblog.com/2012/03/chuck-norris-joins-army-immediately-promoted-chairman-of-joint-chiefs/
        </p>
      </div>
    );
  }
}

export default Aboutpage;
