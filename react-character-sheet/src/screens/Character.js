import React from 'react';

const Character = ({ match }) => (
    <div>
        <h3>{match.params.characterId}</h3>
    </div>
);

export default Character;