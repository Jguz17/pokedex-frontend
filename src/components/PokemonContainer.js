import React, { Component } from 'react'
import PokemonCard from './PokemonCard'

export class PokemonContainer extends Component {
    render() {
        return (
            <div>
                {/* {console.log(this.props.pokes)} */}
                {this.props.pokes.map(poke => {
                    return <PokemonCard poke={poke}/>
                })}
            </div>
        )
    }
}

export default PokemonContainer
