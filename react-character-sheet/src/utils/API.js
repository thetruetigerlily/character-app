import axios from 'axios';

export default {
    createCharacter: function(character) {
        return axios.post("http://localhost:3001/characters/createcharacter", character)
    }
}