import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/home-page.component'
import ShopPage from '../src/components/shop/shop.component'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/shop' component={ShopPage}></Route>
    </Switch>
  );
}

export default App;
