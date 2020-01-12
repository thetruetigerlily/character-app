'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "character", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "intial_migration",
    "created": "2020-01-11T16:10:35.845Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "character",
        {
            "character_id": {
                "type": Sequelize.INTEGER(5).UNSIGNED,
                "field": "character_id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            },
            "character_name": {
                "type": Sequelize.STRING(50),
                "field": "character_name",
                "allowNull": false
            },
            "race": {
                "type": Sequelize.STRING(25),
                "field": "race",
                "allowNull": false
            },
            "class": {
                "type": Sequelize.STRING(25),
                "field": "class",
                "allowNull": false
            },
            "background": {
                "type": Sequelize.STRING(20),
                "field": "background",
                "allowNull": false
            },
            "alignment": {
                "type": Sequelize.STRING(16),
                "field": "alignment",
                "allowNull": false
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
