import axios from 'axios';

export default {
    createCharacter: function(character) {
        return axios.post("http://localhost:3001/characters/createcharacter", character)
    },

    getAllCharacters: function() {
        return axios.get("http://localhost:3001/characters")
    },

    deleteCharacter:  function(characterId) {
        return axios.delete(`http://localhost:3001/characters/${characterId}`)
    }
}