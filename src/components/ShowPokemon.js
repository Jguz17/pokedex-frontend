import React, { Component } from 'react'
import InfoContainer from './InfoContainer'
// import PokemonController from './PokemonController'

export class ShowPokemon extends Component {
    state = {
        pokemonInfo: []
    }
    
    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon/' + this.props.match.params.id)
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                pokemonInfo: data
            })
        })
    }

    render() {
        // console.log(this.props)
        return (
            <div className="show-pokemon-container">
                <h1>{this.props.match.params.id}</h1>
                <InfoContainer info={this.state.pokemonInfo}/>
                <div className='pokemon-image'>
                    {this.state.pokemonInfo.sprites ? <img src={this.state.pokemonInfo.sprites.front_default}></img> : null}
                    
                </div>
                {/* <h1>Hello world</h1> */}
                
            </div>
        )
    }
}

export default ShowPokemon
