import React, { Component } from 'react'
import { connect } from 'react-redux'
import PokemonContainer from './PokemonContainer'

export class PokedexHome extends Component {
    state = {
        jsonRESULTS: [],
        pokes: []
    }
    
    componentDidMount() {
        // fetch('https://pokeapi.co/api/v2/pokemon?limit=721')
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then((res) => res.json())
        .then((data) => {
            data.results.map(test => {
                this.setState({
                    jsonRESULTS: [...this.state.jsonRESULTS, test]
                })
            })
            this.state.jsonRESULTS.map(test => {
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
        return (
            <div>
                <h1>Pokedex Home</h1>
                {/* {console.log(this.state.pokes)} */}
                <PokemonContainer pokes={this.state.pokes}/>
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