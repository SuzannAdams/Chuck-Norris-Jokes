import React, { Component } from 'react';
import './App.css';
import Jokepage from './Jokepge.js';
import Aboutpage from './Aboutpage.js';
import Homepage from './Homepage.js';
import { Link } from 'react-router-dom';

const jokes = http://api.icndb.com/jokes/random?exclude=[explicit]

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

  render() {
    return (
      <div>
        <header>
          <Link to="/">
            <h1>Chuck Norris Jokes</h1>
            <img src="https://imgur.com/OClU3r6"/>
          </Link>
        </header>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Homepage jokes={jokes} setJokes={this.setJokes} />}
            />
            <Route
              exact
              path="/jokes/"
              render={props => <Showpage {...props} jokes={jokes} />}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

//   componentDidMount() {
//     this.updateState();
//   }
//   updateState = () => {
//     fetch(http://api.icndb.com/jokes/random?exclude=[explicit])
//         .then(response => response.json())
//         .then(data => {
//           this.setState({ jokes: data });
//         })
//   };

//   render() {
//     return (
//       <>
//         <div className="header">
//           <p>Chuck Norris Jokes</p>
//         </div>
//         <Jokepage
//           setup={this.state.jokes.setup}
//           punchline={this.state.jokes.punchline}
//         />
//         <button onClick={this.updateState}>New Joke</button>
//       </>
//     );
//   }
// }

export default App;
