import React, { Component } from 'react';
import {Route, BrowserRouter, Switch, NavLink} from 'react-router-dom'
import logo from './logo.svg';
import './css/App.css';
import Spotify from './components/Spotify'
import SearchT from './components/SearchT'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: 'BQAFU9KUrA529hG6QxD4yVoTzBAzdyIUImlCO35WFyA_q7Bvw9NB0u1kcbhKBi9kOPxvgvrp-6F3EFuoyydEnDnkB5tcd5ZjkYKOz58UhBoDbRHjYLbaonlRLlCZxym57kzfHreU5_NdU2taMqWnHQRGRDFPmlSZJg'
    }
  }

  render() {
    return ( <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to</h1>
          <h2 className="App-title">Spotif<span>x </span></h2>
        </header>
        <h3 id='welc'> What are you searching for ?</h3>
        <hr />
        <NavLink exact to='/tracksrch' activeStyle={{color: '#1DB954'}}>A song</NavLink>
        <NavLink exact to='/artistsrch' activeStyle={{color: '#1DB954'}}>An Artist </NavLink>
        <Switch>
          <Route path='/tracksrch' render={() => <SearchT token={this.state.token} />} />
          <Route path='/artistsrch' render={() => <Spotify token={this.state.token} />} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
