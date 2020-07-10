import history from "../history";
import {getPokemon} from './pokemon'

// ACTION TYPES

export const GET_USER = "GET_USER";
export const LOGOUT_USER = "LOGOUT_USER";

//ACTION CREATORS
export const getUser = (user) => ({ type: GET_USER, user });
export const removeUser = () => ({ type: LOGOUT_USER });

const API = "https://pokedex-app-api.herokuapp.com/api/v1/";

export const loginUser = (user) => {
  return (dispatch) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    };
    fetch(API + "login", reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.user) {
          dispatch(getUser(data.user));
          dispatch(getPokemon(data.user.pokemons));
          localStorage.setItem("token", data.jwt);
          //whereever you want to go after logging in
          history.push(`/home`);
          // console.log(data.user)
        }
        //however you want  to  handle the error
        else {
          history.push("/login");
        }
      });
  };
};

export const signUpUser = (user) => {
  return (dispatch) => {
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ user }),
    };
    fetch(API + "users", reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.user) {
          dispatch(getUser(data.user));
          localStorage.setItem("token", data.jwt);
          //whereever you want to go after logging in
          history.push("/home");
        } else {
          //however you want  to  handle the error
          history.push("/signup");
        }
      });
  };
};

export const getCurrentUser = (token) => {
  return (dispatch) => {
    const reqObj = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(API + "profile", reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch(getUser(data.user));
        dispatch(getPokemon(data.user.pokemons));
        // console.log(data.user)
      });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(removeUser());
    history.push("/login");
  };
};

export const signupPage = () => {
  return (dispatch => {
    history.push('/signup')
  })
}