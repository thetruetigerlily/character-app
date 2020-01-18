import React, { Component } from 'react';
import Character from './Character';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import API from '../utils/API';


class Characters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            characterName: "",
            race: "",
            class: "barbarian",
            background: "acolyte",
            alignment: "lawful_good"
        };

        this.updateCharacter = this.updateCharacter.bind(this);
        this.updateRace = this.updateRace.bind(this);
        this.updateClass = this.updateClass.bind(this);
        this.updateBackground = this.updateBackground.bind(this);
        this.updateAlignment = this.updateAlignment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateCharacter = (event) => {
        this.setState({ characterName: event.target.value })   
    }

    updateRace = (event) => {
        this.setState({ race: event.target.value })
    }

    updateClass = (event) => {
        this.setState({ class: event.target.value })
    }
    
    updateBackground = (event) => {
        this.setState({ background: event.target.value })
    }
    
    updateAlignment = (event) => {
        this.setState({ alignment: event.target.value })  
    }

    handleSubmit = (event) => {
        event.preventDefault();

        API.createCharacter({
            character_name: this.state.characterName,
            race: this.state.race,
            class: this.state.class,
            background: this.state.background,
            alignment: this.state.alignment
        }).then(results => {
            console.log(results);

            this.setState({
                characterName: "",
                race: "",
                class: "barbarian",
                background: "acolyte",
                alignment: "lawful_good"
            })

        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <h2>Characters</h2>

                <form>
                    <div>
                        <label for="character_name">Character Name: </label>
                        <input type="text" name="character_name" value={this.state.characterName} onChange={this.updateCharacter} />
                    </div>
                    <div>
                        <label for="race">Race: </label>
                        <input type="text" name="race" value={this.state.race} onChange={this.updateRace} />
                    </div>
                    <div>
                        <label for="class">Class: </label>
                        <select name="class" value={this.state.class} onChange={this.updateClass}>
                            <option value="barbarian">Barbarian</option>
                            <option value="bard">Bard</option>
                            <option value="cleric">Cleric</option>
                            <option value="druid">Druid</option>
                            <option value="fighter">Fighter</option>
                            <option value="monk">Monk</option>
                            <option value="paladin">Paladin</option>
                            <option value="ranger">Ranger</option>
                            <option value="rogue">Rogue</option>
                            <option value="sorcerer">Sorcerer</option>
                            <option value="warlock">Warlock</option>
                            <option value="wizard">Wizard</option>
                        </select>
                    </div>
                    <div>
                        <label for="background">Background: </label>
                        <select name="background" value={this.state.background} onChange={this.updateBackground}>
                            <option value="acolyte">Acolyte</option>
                            <option value="charlatan">Charlatan</option>
                            <option value="criminal">Criminal</option>
                            <option value="entertainer">Entertainer</option>
                            <option value="folk_hero">Folk Hero</option>
                            <option value="guild_artisan">Guild Artisan</option>
                            <option value="hermit">Hermit</option>
                            <option value="noble">Noble</option>
                            <option value="outlander">Outlander</option>
                            <option value="sage">Sage</option>
                            <option value="sailor">Sailor</option>
                            <option value="soldier">Soldier</option>
                            <option value="urchin">Urchin</option>
                        </select>
                    </div>
                    <div>
                        <label for="alignment">Alignment: </label>
                        <select name="alignment" value={this.state.alignment} onChange={this.updateAlignment}>
                            <option value="lawful_good">Lawful Good</option>
                            <option value="lawful_neutral">Lawful Neutral</option>
                            <option value="lawful_evil">Lawful Evil</option>
                            <option value="neutral_good">Neutral Good</option>
                            <option value="neutral">Neutral</option>
                            <option value="neutral_evil">Neutral Evil</option>
                            <option value="chaotic_good">Chaotic Good</option>
                            <option value="chaotic_neutral">Chaotic Neutral</option>
                            <option value="chaotic_evil">Chaotic Evil</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Characters;