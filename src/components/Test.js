import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removePokemonFromTeam, editPokemonFromTeam } from '../actions/pokemon'
import '../pokedex.css'

let pokemonName;

export class Test extends Component {

    componentDidMount() {
        let test;
    }

    state = {
        inEditMode: false
    }

    removePokemon(id) {
        this.props.removePokemonFromTeam(id)
    }

    changeEditMode() {

        this.setState({
            inEditMode: !this.state.inEditMode
        })
    }

    renderEditView() {
        return <div className='pokemon-team'>
                <input id='edit-field' type='text' onChange={() => this.updateComponentValue()} defaultValue={this.props.pokemon.name} ref='textInput'/>
                <button onClick={() => this.changeEditMode()}>X</button>
                <button onClick={() => this.submitData()}>OK</button>
        </div>
    }

    renderDefaultView() {
        return (
            <div>
                <p>{this.props.pokemon.name}</p>
                <input 
                    id='edit' 
                    onClick={() => this.changeEditMode()} 
                    type='button' 
                    value='edit name'>
                </input>
            </div>
        )
    }

    updateComponentValue(event) {
        pokemonName = document.getElementById('edit-field').value
    }

    submitData() {

        this.setState({
            inEditMode: !this.state.inEditMode
        })

        this.props.editPokemonFromTeam(this.props.pokemon.id, pokemonName)
    }

    render() {

        
        return (
            <div className='pokemon-in-team'>
                <p>No.{this.props.pokemon.dex_id} : {this.state.inEditMode ? this.renderEditView() : this.renderDefaultView()}</p>
                <ul>
                    {this.props.pokemon.types ? this.props.pokemon.types.map(type => <li>{type}</li>) : null}
                </ul>
                <img src={this.props.pokemon.sprites}></img>
                <input id='delete-pokemon' onClick={() => this.removePokemon(this.props.pokemon.id)} type='button' value="delete"></input>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePokemonFromTeam: (id) => dispatch(removePokemonFromTeam(id)),
        editPokemonFromTeam: (id, name) => dispatch(editPokemonFromTeam(id, name))
    }
}

export default connect(null, mapDispatchToProps)(Test)