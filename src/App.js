import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';

// Import Styles
import './App.css';
import './pages/homepage/homepage.scss';

// Components: Homepage
import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUpPage from './pages/signInSignUpPage/SignInSignUpPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
