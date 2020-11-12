import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/pages/Home';
import LandingPage from './components/pages/Landing';
import LoginPage from './components/pages/Login';
import SignUp from './components/pages/Signup';
import TreasureChest from './components/pages/TreasureChest';
import Notes from './components/pages/Notes';
import PositiveStatement from './components/pages/PositiveStatement';
import Vent from './components/pages/Vent';

class App extends Component {
  state = {
    b: true
  }
  render(){
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={()=><HomePage />}
          />
        <Route
          exact
          path="/app"
          render={()=><LandingPage />}
          />
        <Route
          exact
          path="/login"
          render={()=><LoginPage />}
          />
        <Route
          exact
          path="/signup"
          render={()=><SignUp />}
          />
        <Route
          exact
          path="/treasurechest"
          render={()=><TreasureChest />}
          />
        <Route
          exact
          path="/notes"
          render={()=><Notes />}
          />
        <Route
          exact
          path="/positivestatement"
          render={()=><PositiveStatement />}
          />
        <Route
          exact
          path="/vent"
          render={()=><Vent />}
          />
      </div>
    )
  }
}

export default App;
