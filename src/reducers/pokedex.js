import { ADD_POKEMON } from '../actions/pokedex'

const initialState = []
export default function pokedexReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POKEMON:
            return action.pokemon
        default:
            return state
    }
}