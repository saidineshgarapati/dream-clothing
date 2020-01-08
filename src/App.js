import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/home-page.component'

const Hats = () => {
  return(
    <h1>Hats page</h1>
  )
}

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop/hats' component={Hats}></Route>
    </Switch>
  );
}

export default App;
