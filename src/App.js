import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Spotify from './components/Spotify'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: 'BQDztRpL2IANJGSVX4Fr9ljTVH7FreMLaq15LY7WWznqmETsIQXG5gQbSCtJwirmcsd-sYvHbR6EeB-57nGwXzZbl-2oXitL-6vcnK5ezG0Co7EqdNVYdnXoSPpfRYGmDYOPCX3BrCS8wudtflk8FxB_FqD6dR7FQA'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Spotif<span>x </span></h1>
        </header>
        <Spotify token={this.state.token} />
      </div>
    );
  }
}

export default App;
