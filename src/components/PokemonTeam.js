import React, { Component } from 'react'
import Test from './Test'
import {connect} from 'react-redux'
import '../index.js'

export class PokemonTeam extends Component {

    render() {

        return (
            <div className='pokemon-team'>
                <h1>Test</h1>
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
