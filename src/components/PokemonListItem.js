import React, { Component } from 'react'
import { connect } from 'react-redux'
import { currentPokemon } from '../actions/pokedex'

export class PokemonListItem extends Component {

    handleClick(pokemon) {
        // console.log(pokemon)
        this.props.currentPokemon(pokemon)
    }

    render() {
        return (
            <div className='pokemon-list-item' onClick={() => this.handleClick(this.props.poke)}>
                <p id='pokemon-list-item-dex-number'>Dex No.: {this.props.poke.id}</p>
                <p id='pokemon-list-item-name'>{this.props.poke.name}</p>
                <img id='pokemon-list-item-image' src={this.props.poke.sprites.front_default}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        currentPokemon: (pokemon) => dispatch(currentPokemon(pokemon))
    }
}

export default connect(null, mapDispatchToProps)(PokemonListItem)
