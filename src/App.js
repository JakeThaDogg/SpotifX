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
      token: 'BQA25Bt5ujbg_5_imIga_O6BYLpEOqDD2kqmJZ2H942MFjnNVBvOeby3JPwTJdUD3oSE_7h3x54a4E6FrVsuK-MLNuA19xGz2llzDJCzQCYZJJU1L1QXcRDRkB7fdoDHEvTa08eQ7ldtw4D5oRdramFXSXKRzJVBRQ'
    }
  }

  render () {
    return ( <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to</h1>
          <h2 className="App-title">Spotif<span>x </span></h2>
        </header>
        <h3 id='welc'> What are you searching for ?</h3>
        <hr />
        <NavLink exact to='/tracksrch' activeStyle={{color: '#1DB954'}} className='link'>A song</NavLink>
        <NavLink exact to='/artistsrch' activeStyle={{color: '#1DB954'}} className='link'>An Artist </NavLink>
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
