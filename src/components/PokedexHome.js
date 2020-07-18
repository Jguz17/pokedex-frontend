import React, { Component } from 'react'
import { connect } from 'react-redux'
import PokemonContainer from './PokemonContainer'
import PokemonTeam from './PokemonTeam'
import {Link} from 'react-router-dom'
import { logoutUser } from '../actions/user';
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../index.css'
import '../navbar.css'
import '../media-queries.css'


export class PokedexHome extends Component {
    state = {
        jsonRESULTS: [],
        pokes: [],
    }
    
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((res) => res.json())
        .then((data) => {
            data.results.map(test => {
                fetch(test.url)
                .then((res) => res.json())
                .then((data) => {
                    this.setState({
                        pokes: [...this.state.pokes, data]
                    })
                })
            })
        })
    }

    
    render() {
        const pokeData = this.state.pokes.sort((a, b) => a.id - b.id)
        return (
            <div className="pokedex-home">
                <div className='nav-bar' id='my-nav-bar'>
                    <ul>
                        <li><Link to={'/home'}>Home</Link></li>
                        <li><Link to={'/pokedex'}>Pokedex</Link></li>
                        <li onClick={this.props.logout}>Logout</li>
                    </ul>
                </div>
                <div className='pokedex-home-container'>
                    <PokemonContainer pokes={pokeData} user={this.props.user}/>
                    <hr/>
                    <PokemonTeam/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokedexHome)