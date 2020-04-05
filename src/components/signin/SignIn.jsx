import React from 'react';

//Style
import './signIn.scss';

//Component
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }


  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }

    this.setState({ email: '', password: '' })
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>
          Sign in with your email and password
        </span>

        <form action="" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required />

          <FormInput
            type="password"
            name="password"
            id="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>

          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;