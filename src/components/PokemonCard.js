import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {pokemonTeamFetch} from '../actions/pokemon'
import Test from './Test'
import {connect} from 'react-redux'

export class PokemonCard extends Component {

    state = {
        hover: false
    }

    addToTeamButton() {
        const name = this.props.poke.name
        const dex_id = this.props.poke.id
        const user_id = this.props.user.id
        let types = [];
        this.props.poke.types.map(type => types = [...types, type.type.name])
        const sprites = this.props.poke.sprites.front_default
        const pokemonObj = ({name, dex_id, user_id, types, sprites})
        this.props.pokemonTeamFetch(pokemonObj)
    }
    
    render() {


        return (
                <div className='pokemon-card'>
                    <div className="pokemon-card-info" >
                        <div className='poke-dex-num'>
                            <p>No.{this.props.poke.id} : {this.props.poke.name}</p>
                        </div>
                        <div className='line-break'></div>
                        <ul>
                            {this.props.poke.types.map(type => <li>{type.type.name}</li>)}
                        </ul>
                        <div className='line-break'></div>
                        <img src={this.props.poke.sprites.front_default}></img>
                    </div>
                    {/* <div className='pokemon-card-overlay'> */}
                        <input type='button' value='add to team' onClick={() => this.addToTeamButton()}></input>
                    {/* </div> */}
                </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        pokemonTeamFetch: (pokemonObj) => dispatch(pokemonTeamFetch(pokemonObj))
    }
}

export default connect(null, mapDispatchToProps)(PokemonCard)