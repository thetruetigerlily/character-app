import React, { Component } from 'react';
import API from '../utils/API';

class CharacterCard extends Component {

    constructor(props) {
        super(props);

    }
    
    removeCharacter = (character_id) => {
        API.deleteCharacter(character_id).then(
            () => {
                this.forceUpdate()
                window.location.reload();
            }
        ).catch(err => console.log(err))
    }

    render() {
        return (
            <div class="card w-50">
                <div class="card-body">
                    <h5 class="card-title">{this.props.characterName}</h5>
                    <ul>
                        <li class="card-text">Race: {this.props.characterRace}</li>
                        <li class="card-text">Class: {this.props.characterClass}</li>
                        <li class="card-text">Background: {this.props.characterBackground}</li>
                        <li class="card-text">Alignment: {this.props.characterAlignment}</li>
                    </ul>
                    <button class="btn btn-primary" onClick=
                    {this.removeCharacter.bind(this, this.props.characterId)}>Delete</button>
                </div>
            </div>

        )
    }

}

export default CharacterCard;
