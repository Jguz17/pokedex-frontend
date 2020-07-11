import { GET_POKEMON, ADD_POKEMON, REMOVE_POKEMON, EDIT_POKEMON } from '../actions/pokemon'
import {LOGOUT_USER} from '../actions/user'

const initialState = [];

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMON:
      return action.pokemons;
    case ADD_POKEMON:
        return [...state, action.pokemon]
    case LOGOUT_USER:
        return [];
    case REMOVE_POKEMON:
        return state.filter(pokemon => pokemon.id !== action.id)
    case EDIT_POKEMON:
        return state.map(pokemon => pokemon.id === action.pokemon.id ? action.pokemon : pokemon)
    default:
      return state;
  }
}

