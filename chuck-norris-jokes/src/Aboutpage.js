import React, { Component } from 'react';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

class Aboutpage extends Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <img src="http://statusmind.com/images/2013/08/Famous-Facebook-Status-20558.jpg" />
        <p>
          About the Developer: Suzann Adams, a Southern California Educator
          turned Software Developer in six weeks time. It's still the beginning
          of the Developer's journey for her, hopefully this web application
          that's dedicated to the multitalented American icon, Chuck Norris,
          will inspire you and make you chuckle.
        </p>
        <p>
          Appreciation and Gratitude to:
          <ul>
            <li>Esin Saribudak</li>
            <li>Peter Lutz</li>
            <li>Jade Kang</li>
            <li>Myshawne Stallings</li>
            <li>Rixio Barrios</li>
            <li>Mindy Marmol</li>
          </ul>
          Without their support and friendship this application would not exist.
          Thank you!
        </p>
        <p>APi used: http://www.icndb.com/api/</p>
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
