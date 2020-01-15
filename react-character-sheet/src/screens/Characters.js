import React from 'react';
import Character from './Character';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Characters = ({ match }) => (
    <div>
        <h2>Characters</h2>

        <ul>
            <li>
                <Link to={`${match.url}/characters`}>List of Characters</Link>
            </li>
            <li>
                <Link to={`${match.url}/create`}>Create a Character</Link>
            </li>
        </ul>

        <Route path={`${match.url}/:characterId`} component={Topic} />
        <Route exact path={match.url} render={() => <h3>Please select a page.</h3>} />
    </div>
);

export default Characters;