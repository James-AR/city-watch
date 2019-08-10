import React from 'react';
import './App.css';
import { firestore } from './firebase/firebaseUtils'
import { Route, Switch, Link } from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import UserState from './context/userState'

function App() {
  firestore.collection('users').doc('dsfsdf43ser32').delete()

  return (
    <div>
      <UserState>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/homepage' component={HomePage} />
        </Switch>
      </UserState>
    </div>
  );
}

export default App;

