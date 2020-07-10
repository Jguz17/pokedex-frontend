import { ADD_POKEMON } from '../actions/pokedex'

const initialState = []
export default function pokedexReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POKEMON:
            // console.log(state)
            return action.pokemon
            // console.log(state)
        default:
            return state
    }
}