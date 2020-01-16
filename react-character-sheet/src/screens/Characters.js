import React from 'react';
import Character from './Character';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Characters = ({ match }) => (
    <div>
        <h2>Characters</h2>

        <form>
            <div>
                <label for="character_name">Character Name: </label>
                <input type="text" name="character_name" />
            </div>
            <div>
                <label for="race">Race: </label>
                <input type="text" name="race" />
            </div>
            <div>
                <label for="class">Class: </label>
                <select name="class">
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
                <select name="background">
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
                <select name="alignment">
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
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
);

export default Characters;