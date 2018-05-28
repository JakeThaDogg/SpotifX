import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import Spotify from './components/Spotify'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: 'BQBOq7wn_qgb5fgwXjqLyIfSKD8t-lcDlOB2SE7K52rECcYdoYdTXBUdEphQok0H4XZcLqKDkheJcd_cFgtp17fjqsMt2ynXZTzi7fIOXD1uzkprkVsSYobUxM6hfvmU28pa_TVGZQeet9h4FG10dtCP_V_owQj9Cw'
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
