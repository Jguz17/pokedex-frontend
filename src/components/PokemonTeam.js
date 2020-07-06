import React, { Component } from 'react'
import Test from './Test'
import {connect} from 'react-redux'
// import '../index.js'

export class PokemonTeam extends Component {

    render() {
        // console.log(this.props.pokemon_team)
        // console.log(this.props)
        return (
            <div className='pokemon-team'>
                <h1>Test</h1>
                {/* {this.props.pokemon_team.map(pokemon => {
                    console.log(pokemon)
                })} */}
                {this.props.pokemons.map(pokemon => <Test pokemon={pokemon}/>)}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons
    }
}

export default connect(mapStateToProps, null)(PokemonTeam)
