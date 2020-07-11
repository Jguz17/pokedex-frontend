import React, { Component } from 'react'
import PokemonListItem from './PokemonListItem'
import '../pokedex.css'

export class PokemonList extends Component {

    render() {

        return (
            <div className='pokedex-pokemon-list'>
                <h1>pokemon list</h1>
                {this.props.pokemon.map(poke => {
                    return <PokemonListItem poke={poke} />
                })}            
            </div>
        )
    }
}

export default PokemonList
