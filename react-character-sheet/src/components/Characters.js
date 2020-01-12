import React from 'react';
import axios from 'axios';

class Characters extends React.Component {
    state = {
        characterData: []
    };

    fetchCharacterData = () => {
        var encodedURI = window.encodedURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    characterData: response.data
                };
            });
        });
    };

    componentDidMount() {
        fetch('http://localhost:3001/staticCharacters')
            .then((res) => res.json())
            .then((data) => this.setState(data))
            .catch((error) => console.error('Error:', error));
        console.log("MOUNT");
    }

    render() {
        console.log(this.state.characterData);
        if (this.state.characterData.length === 0) {
           return <div>Failed to fetch data from server</div>;
        }
        const characters = this.state.characterData.map(character => {
        //    <div key={character.character_name}>
        //        <em>{character.character_name}</em>: {character.class}
        //    </div>
        });
    }
}

export default Characters;