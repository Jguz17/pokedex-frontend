import React, { Component } from 'react'
import PokemonList from './PokemonList'
import PokedexPokemonContainer from './PokedexPokemonContainer'
import {Link} from 'react-router-dom'
import '../pokedex.css'
import '../navbar.css'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/user';

export class PokedexView extends Component {
    state = {
        pokemon: []
        // currentlyDisplayed: {}
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((res) => res.json())
        .then((data) => {
            data.results.map(pokemon => {
                fetch(pokemon.url)
                .then((res) => res.json())
                .then((data) => {
                    this.setState({
                        pokemon: [...this.state.pokemon, data]
                    })
                })
            })
        })
    }

    render() {
        // console.log(this.state.pokemon)
        return (
            <div className='pokedex-view-container'>
                <div className='nav-bar'>
                    <ul>
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/pokedex'}>Pokedex</Link></li>
                        <li onClick={this.props.logout}>Logout</li>
                    </ul>
                </div>
                <div className='pokedex-view-container'>
                    <PokedexPokemonContainer/>
                    <PokemonList pokemon={this.state.pokemon}  />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser()),
    }
}

export default connect(null, mapDispatchToProps)(PokedexView)
