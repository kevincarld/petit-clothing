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
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Auth listener from firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // If has user
      if (userAuth) { 
        const userRef = await createUserProfileDocument(userAuth);
        // Checked snapshot within db using user reference
        userRef.onSnapshot((snapShot) => { 
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        })
      } else {
        this.setState({ currentUser: userAuth });
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
