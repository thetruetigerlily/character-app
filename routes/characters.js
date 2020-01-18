const express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
    models.character.findAll({
        attributes: ['character_id', 'character_name', 'race', 'class', 'background', 'alignment']
    })
        .then(charactersFound => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(charactersFound));
        });
});

router.get('/:id', function(req, res, next) {
    models.character
        .findByPk(parseInt(req.params.id))
        .then(charactersFound => {
            res.setHeader('Content-Type', 'applicaton/json');
            res.send(JSON.stringify(charactersFound));
        })
});

router.post('/createcharacter', (req, res) => {
    models.character.create(req.body)
        .then(newCharacter => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(newCharacter));
        })
        .catch(err => {
            res.status(400);
            res.send(err.message);
        })
});  

router.put('/:id', function(req, res, next) {
    let characterId = parseInt(req.params.id);
    models.character
        .update(req.body, { where: { character_id: characterId } })
        .then(result => res.redirect('/characters/' + characterId))
        .catch(err => {
            res.status(400);
            res.send("There was a problem updating the character. Please check the character information.");
        });
});
  
router.delete('/:id', function(req, res, next) {
    let characterId = parseInt(req.params.id);
    models.character
        .destroy({
            where: { character_id: characterId }
        })
        .then(result => res.redirect('/characters'))
        .catch(err => {
            res.status(400);
            res.send("There was a problem deleting the character. Please make sure you are specifying the correct id.");
        });
});

module.exports = router;