import React, { Component } from 'react';
import './App.css';
import Jokepage from './Jokepage.js';
import Aboutpage from './Aboutpage.js';
import Homepage from './Homepage.js';
import { Link, Switch, Route } from 'react-router-dom';

const url = 'https://api.icndb.com/jokes/random?exclude=[explicit]';

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

  componentDidMount() {
    this.callToApi();
  }
  callToApi = () => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({ jokes: response.value.joke });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <h1>Chuck Norris Jokes</h1>
          </Link>
          <p>
            "I've always found that anything worth achieving will always have
            obstacles in the way and you've got to have that drive and
            determination to overcome those obstacles on route to whatever it is
            that you want to accomplish." Chuck Norris
          </p>
          <div className="container">
            <img
              src="https://i.imgur.com/gpzGxVZ.jpg"
              alt="Chuck Norris collage"
            />
          </div>
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
              render={() => (
                <Jokepage callToApi={this.callToApi} joke={this.state.jokes} />
              )}
            />
            <Route path="/about" render={props => <Aboutpage {...props} />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
