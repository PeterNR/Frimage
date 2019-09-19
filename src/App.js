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
          <Route exact path='/' component={HomePage} />
          <Route  path='/friend' component={Friend}/>
          <Route  path='/friend/:' component={HomePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;