const express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/characters', function(req, res, next) {
    models.character.findAll({}).then(charactersFound => {
        res.render('characters', {
        characters: charactersFound
        });
    });
});
  
router.post('/character', (req, res) => {
    models.character
        .findOrCreate({
            where: {
                character_name: req.body.character_name,
                race: req.body.race,
                class: req.body.class,
                background: req.body.background,
                alignment: req.body.alignment
            }  
        })
        .spread(function(result, created) {
            if (created) {
                res.redirect('/characters/' + result.character_id);
            } else {
               // res.status(400);
                res.send('Character already exists!');
            }
        });
});
  
router.put('/characters/:id', function(req, res, next) {
    let characterId = parseInt(req.params.id);
    models.character
        .update(req.body, { where: { character_id: characterId } })
        .then(result => res.redirect('/characters/' + characterId))
        .catch(err => {
            res.status(400);
            res.send("There was a problem updating the character. Please check the character information.");
        });
});
  
router.delete('/characters/:id', function(req, res, next) {
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