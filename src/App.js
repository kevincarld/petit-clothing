import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import Styles
import './App.css';
import './pages/homepage/homepage.scss';

// Components: Homepage
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
