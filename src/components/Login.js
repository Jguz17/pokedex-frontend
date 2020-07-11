import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/user';
import {Link} from 'react-router-dom'
import '../login.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state);
    this.setState({ username: '', password: '' });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className='login-container'>
        <form className='form-container' onSubmit={this.handleSubmit}>
          <input class='input' name='username' value={username} onChange={this.handleChange} placeholder='username'/>
          <input
            class='input'
            name='password'
            type='password'
            value={password}
            onChange={this.handleChange}
            placeholder='password'
          />
          <button id='login-button' type='submit'>Login</button>
          <p>Don't have an account? <span><Link to={'/signup'}>Sign Up</Link></span></p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { loginUser: (user) => dispatch(loginUser(user)) };
};

export default connect(null, mapDispatchToProps)(Login);