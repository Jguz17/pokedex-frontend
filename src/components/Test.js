import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removePokemonFromTeam } from '../actions/pokemon'
// import pokemonObj from './PokemonCard'

export class Test extends Component {

    removePokemon(id) {
        // console.log(this.props.pokemon.id)
        this.props.removePokemonFromTeam(id)
    }

    render() {
        // this.props.pokemon.types.map(type => console.log(type))
        // console.log(pokemonObj)
        
        return (
            <div>
                <p>{this.props.pokemon.dex_id}</p>
                <p>{this.props.pokemon.name}</p>
                <ul>
                    {this.props.pokemon.types ? this.props.pokemon.types.map(type => <li>{type}</li>) : null}
                </ul>
                {console.log(this.props)}
                <img src={this.props.pokemon.sprites}></img>
                <input onClick={() => this.removePokemon(this.props.pokemon.id)} type='button' value="delete"></input>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePokemonFromTeam: (id) => dispatch(removePokemonFromTeam(id))
    }
}

export default connect(null, mapDispatchToProps)(Test)