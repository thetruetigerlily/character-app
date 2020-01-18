import React, { Component } from 'react';
import CharacterCard from '../components/CharacterCard';
import API from '../utils/API';
import Character from './Character';

class List extends Component {

    constructor(props) {
        super(props);
          this.state = { characters: [] }
        //   this.myFunction = this.myFunction.bind(this)
    }

    componentDidMount() {
        this.getCharacters()
    }

    getCharacters = () => {
        API.getAllCharacters().then(
            characters => {
                this.setState({characters: characters.data})
            }
        )
    }

    removeCharacter = (character_id) => {
        // API.deleteCharacter()
        console.log(character_id);
    }

    render() {
        return (
            <div>
                <h2>List</h2>

                {this.state.characters.map(
                    (character, index) => {
                        return (
                            <CharacterCard
                                key={index}
                                characterId={character.character_id}
                                characterName={character.character_name}
                                characterRace={character.race}
                                characterClass={character.class}
                                characterBackground={character.background}
                                characterAlignment={character.alignment}
                                delete={this.removeCharacter}
                            />
                        )
                    }
                )}

            </div>
        )
    }

}

export default List;