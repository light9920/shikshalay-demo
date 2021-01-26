import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Services';

import Login from './Login';
import alanBtn from '@alan-ai/alan-sdk-web';
import Dashboard from './Dashboard';

const alanKey = '7e4c1a1d3d9167321d6283b1d27aec482e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {

  useEffect(() => {
      alanBtn({
        key: alanKey,
        onCommand: ({ command }) => {
          if( command === 'testCommand'){
             alert('this code was executed');
          }
        }
      })
  })
  return (
    <>
      <body>
        <script src="/__/firebase/8.2.4/firebase-app.js"></script>
        <script src="/__/firebase/8.2.4/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
      </body>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
          <Route path='/login'>
              <Login />
          </Route>
      </Router>
    </>
  );
}

export default App;
