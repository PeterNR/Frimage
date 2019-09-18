import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Friend from './components/Friend';
import HomePage from './components/HomePage';

function App(){
  return(
    //lager paths
    <Router>
      <div>
        <Switch>
          <Route exact path='/friend' component={Friend}/>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;