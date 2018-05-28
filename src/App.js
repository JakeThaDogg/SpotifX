import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Spotify from './components/Spotify'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: 'BQDPo1nwe-aj0r2Y1qvGPzQX3KqgxYLeoAh-DA9hGkCRpysYkbXybbi_8jZaon3dOYozpecsIoyJGQr6HaB7nHwn5e7Ps74NR6x8rhDPlo9dOcCr2ViZeE9gezZQoS0S0w6FNrS_zjjrirEkQKoWG2VSPiiZ3lqfNw'
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
