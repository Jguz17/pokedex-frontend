// ACTION TYPES

export const ADD_POKEMON = 'ADD_POKEMON'

// ACTION CREATORS

export const addPokemon = (pokemon) => ({ type: ADD_POKEMON, pokemon });

export const currentPokemon = (pokemon) => {
    return (dispatch) => {
        dispatch(addPokemon(pokemon))
    }
}