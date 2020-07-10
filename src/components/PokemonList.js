import React, { Component } from 'react'
import PokemonListItem from './PokemonListItem'
import '../pokedex.css'

export class PokemonList extends Component {

    render() {
        // const pokeData = this.state.pokes.sort((a, b) => a.id - b.id)
        // console.log(this.props)
        return (
            <div className='pokedex-pokemon-list'>
                <h1>pokemon list</h1>
                {this.props.pokemon.map(poke => {
                    // user={this.props.user} *** MAYBE ADD USER AND ALLOW ADD FEATURE ***
                    return <PokemonListItem poke={poke} />
                })}            
            </div>
        )
    }
}

export default PokemonList
