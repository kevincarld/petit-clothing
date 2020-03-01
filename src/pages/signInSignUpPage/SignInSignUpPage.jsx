import React from 'react';

//Style
import './signInSignUpPage.scss';

//Components
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp';

const SignInSignUp = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
)

export default SignInSignUp;