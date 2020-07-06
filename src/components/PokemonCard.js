import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {pokemonTeamFetch} from '../actions/pokemon'
import Test from './Test'
import {connect} from 'react-redux'

export class PokemonCard extends Component {

    // triggerHover() {
    //     console.log(this)
    // }

    addToTeamButton() {
        const name = this.props.poke.name
        const dex_number = this.props.poke.id
        const user_id = this.props.user.id
        let types = [];
        this.props.poke.types.map(type => types = [...types, type.type.name])
        const sprites = this.props.poke.sprites.front_default
        // console.log(sprites)
        // console.log(this.props.user)
        const pokemonObj = ({name, dex_number, user_id, types, sprites})
        // console.log(pokemonObj)
        this.props.pokemonTeamFetch(pokemonObj)
    }
    
    render() {
        // console.log(this.props)
        return (
            // onMouseEnter={() => this.triggerHover()}
                <div className='pokemon-card' >
                    {/* <Link to={`/pokemon/${this.props.poke.id}`}> */}
                    {/* {console.log(this.props.poke)} */}
                    <div className="pokemon-card-info">
                        <span>No.: {this.props.poke.id}</span>
                        <ul>
                            {this.props.poke.types.map(type => <li>{type.type.name}</li>)}
                        </ul>
                        <img src={this.props.poke.sprites.front_default}></img>
                    </div>
                    <div className='pokemon-card-overlay'>
                        <input type='button' value='add to team' onClick={() => this.addToTeamButton()}></input>
                    </div>
                    {/* </Link> */}
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