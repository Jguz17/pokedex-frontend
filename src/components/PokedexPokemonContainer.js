import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../pokedex.css'

export class PokedexPokemonContainer extends Component {
    render() {
        console.log(this.props.pokedex)
        return (
            // style={this.props.pokedex.name ? {'border' : '2px solid #ABCBDB'} : null}
            <div className='pokedex-pokemon-info-container' >
                {this.props.pokedex.sprites ? <img src={this.props.pokedex.sprites.front_default}/> : null}
                {this.props.pokedex.id ?<p>No.: {this.props.pokedex.id}</p>: null }<br/>
                <p>{this.props.pokedex.name}</p><br/>
                <ul>
                    {this.props.pokedex.types ? <p>Types:</p> : null}
                    {this.props.pokedex.types ? this.props.pokedex.types.map(type => <li>{type.type.name}</li>) : null}
                </ul><br/>
                <ul>
                    {this.props.pokedex.abilities ? <p>Abilities:</p> : null}
                    {this.props.pokedex.abilities ? this.props.pokedex.abilities.map(ability => <li>{ability.ability.name}</li>) : null}
                </ul><br/>
                {this.props.pokedex.height ? <p>Height: {this.props.pokedex.height}</p> : null}<br/>
                {this.props.pokedex.weight ?<p>Weight: {this.props.pokedex.weight}</p>: null}<br/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        pokedex: state.pokedex
    }
    // console.log(state)
}

export default connect(mapStateToProps, null)(PokedexPokemonContainer)