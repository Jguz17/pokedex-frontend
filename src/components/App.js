import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentUser, logoutUser, signUpUser } from '../actions/user';
import Login from './Login';
import SignUp from './SignUp';
import HelloWorld from './HelloWorld';
import PokedexHome from './PokedexHome'
import ShowPokemon from './ShowPokemon'
import PokedexView from './PokedexView'

class App extends Component {
  componentDidMount() {
    const { getCurrentUser } = this.props;
    const token = localStorage.getItem('token');
    if (token) {
      getCurrentUser(token);
    }
  }

  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path={'/signup'} component={SignUp} />
          <Route path={'/helloworld'} component={HelloWorld}/>
          <Route path={'/home'} component={PokedexHome}/>
          <Route path={'/pokedex'} component={PokedexView}/>
          <Route path={'/'} component={Login} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: (token) => dispatch(getCurrentUser(token)),
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(App);
