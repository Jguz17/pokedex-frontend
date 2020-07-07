import history from "../history";

// ACTION TYPES

export const GET_POKEMON = "GET_POKEMON";
export const ADD_POKEMON = 'ADD_POKEMON';
export const REMOVE_POKEMON = 'REMOVE_POKEMON';
// export const EDIT_POKEMON = 'EDIT_POKEMON'

//ACTION CREATORS
export const getPokemon = (pokemons) => ({ type: GET_POKEMON, pokemons });
export const addPokemon = (pokemon) => ({ type: ADD_POKEMON, pokemon });
export const removePokemon = (id) => ({ type:  REMOVE_POKEMON, id });

export const pokemonTeamFetch = (pokemonObj) => {
   return (dispatch) => {
        fetch('http://localhost:3000/api/v1/pokemons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(pokemonObj)
        })
        .then((res) => res.json())
        .then((data) => dispatch(addPokemon(data)))
    }
}

export const removePokemonFromTeam = (id) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/pokemons/' + id, { method: 'DELETE' })
        .then((res) => res.json())
        .then((data) => dispatch(removePokemon(id)))
    }
}