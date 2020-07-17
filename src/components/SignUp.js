import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/user';
import '../signup.css'
// import '../login.css'

class SignUp extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUpUser(this.state);
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className='signup-container'>
        <form className='form-container' onSubmit={this.handleSubmit}>
          <h3>Signup</h3>
          <input className='signup-input' name='username' value={username} onChange={this.handleChange} placeholder='username'/>
          <input className='signup-input' name='password' type='password' value={password} onChange={this.handleChange} placeholder='password'/>
          <button id='signup-button' type='submit'>Signup & Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { signUpUser: (user) => dispatch(signUpUser(user)) };
};


export default connect(null, mapDispatchToProps)(SignUp);