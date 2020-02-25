import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import Styles
import './App.css';
import './pages/homepage/homepage.scss';

// Components: Homepage
import Homepage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
