import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

export class PokemonContainer extends Component {
    render() {

        return (
            <div className='pokemon-container'>
                <h1>Pokemon:</h1>
                {/* {console.log(this.props.pokes)} */}
                {this.props.pokes.map(poke => {
                    return <PokemonCard poke={poke} user={this.props.user}/>
                })}
            </div>
        )
    }
}

export default PokemonContainer
