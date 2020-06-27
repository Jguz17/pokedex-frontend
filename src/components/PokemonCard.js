import React, { Component } from 'react'

export class PokemonCard extends Component {
    render() {
        return (
            <div>
                {this.props.poke.name}
            </div>
        )
    }
}

export default PokemonCard
