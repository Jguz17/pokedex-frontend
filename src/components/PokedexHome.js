import React, { Component } from 'react'
import { connect } from 'react-redux'
import PokemonContainer from './PokemonContainer'
import PokemonTeam from './PokemonTeam'
import '../index.css'

export class PokedexHome extends Component {
    state = {
        jsonRESULTS: [],
        pokes: [],
    }
    
    componentDidMount() {
        // fetch('https://pokeapi.co/api/v2/pokemon?limit=721')
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
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
        // console.log(this.props)
        return (
            <div className="pokedex-home">
                <h1>Pokedex Home</h1>
                <div className='pokedex-home-container'>
                    <PokemonContainer pokes={pokeData} user={this.props.user}/>
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

export default connect(mapStateToProps, null)(PokedexHome)