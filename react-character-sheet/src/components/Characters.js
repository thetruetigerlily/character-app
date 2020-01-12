import React from 'react';
import axios from 'axios';

class Characters extends React.Component {
    state = {
        characterData: []
    };

    fetchCharacterData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
            this.setState(() => {
                return {
                    characterData: response.data
                };
            });
        });
    };

    componentDidMount() {
        this.fetchCharacterData();
        console.log("MOUNT");
    }

    render() {
        console.log(this.state.characterData);
        if (this.state.characterData.length === 0) {
           return <div>Failed to fetch data from server</div>;
        }
        const characters = this.state.characterData.map(character => {
           return <div key={character.name}>
               <em>{character.name}</em>: {character.class}
            </div>
        });
        return <div>{characters}</div>;
    }
}

export default Characters;