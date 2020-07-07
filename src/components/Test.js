import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removePokemonFromTeam } from '../actions/pokemon'
// import pokemonObj from './PokemonCard'

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
        // console.log('test')
        // console.log(this.props.pokemon.name)
        this.setState({
            inEditMode: !this.state.inEditMode
        })
        // console.log()
    }

    renderEditView() {
        return <div>
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
                    value='edit nickname'>
                </input>
            </div>
        )
    }

    updateComponentValue(event) {
        pokemonName = document.getElementById('edit-field').value
        // console.log(pokemonName)
        // console.log(event.target.value)
        // submitData({pokemonName})
    }

    submitData() {
        // console.log(pokemonName)
        // console.log(this.props.pokemon.id)
        this.setState({
            inEditMode: !this.state.inEditMode
        })
        
        fetch('http://localhost:3000/api/v1/pokemons/' + this.props.pokemon.id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                name: pokemonName
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }

    render() {
        // this.props.pokemon.types.map(type => console.log(type))
        // console.log(pokemonObj)
        
        return (
            <div>
                <p>{this.props.pokemon.dex_id}</p>
                {this.state.inEditMode ? this.renderEditView() : this.renderDefaultView()}
                <ul>
                    {this.props.pokemon.types ? this.props.pokemon.types.map(type => <li>{type}</li>) : null}
                </ul>
                {console.log(this.props)}
                <img src={this.props.pokemon.sprites}></img>
                <input onClick={() => this.removePokemon(this.props.pokemon.id)} type='button' value="delete"></input>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePokemonFromTeam: (id) => dispatch(removePokemonFromTeam(id))
    }
}

export default connect(null, mapDispatchToProps)(Test)