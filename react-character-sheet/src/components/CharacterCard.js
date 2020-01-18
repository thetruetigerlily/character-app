import React from 'react';


const CharacterCard = (props) => (

    <div class="card w-50">
        <div class="card-body">
            <h5 class="card-title">{props.characterName}</h5>
            <ul>
                <li class="card-text">Race: {props.characterRace}</li>
                <li class="card-text">Class: {props.characterClass}</li>
                <li class="card-text">Background: {props.characterBackground}</li>
                <li class="card-text">Alignment: {props.characterAlignment}</li>
            </ul>
            <a href="#" class="btn btn-primary" onClick={props.delete(props.characterId)}>Delete</a>
        </div>
    </div>

);

export default CharacterCard;