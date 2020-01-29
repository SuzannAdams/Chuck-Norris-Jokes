import React, { Component } from 'react';
import './App.css';
import Jokepage from './Jokepage.js';
import Aboutpage from './Aboutpage.js';
import Homepage from './Homepage.js';
import { Link, Switch, Route } from 'react-router-dom';

const url = 'http://api.icndb.com/jokes/random?exclude=[explicit]';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: ''
    };
  }

  setJokes = jokes => {
    this.setState({ jokes });
  };
  //do a fetch method here for setJokes to set the state to make the call
  //
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ jokes: response.value.joke });
      })
      .catch(err => {
        console.error(err);
      });
  }
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <h1>Chuck Norris Jokes</h1>
            <img src="https://i.imgur.com/gpzGxVZ.jpg" />
          </Link>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Homepage setJokes={this.setJokes} />}
            />
            <Route
              exact
              path="/jokes"
              render={props => <Jokepage {...props} />}
            />
            <Route
              exact
              path="/jokes"
              render={props => <Aboutpage {...props} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
//need to connect about page with another button to click from Homepage.

export default App;
