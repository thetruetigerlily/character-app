module.exports = function(sequelize, DataTypes) {
    return sequelize.define('character', {
        character_id: {
            type: DataTypes.INTEGER(5).UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        character_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        race: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        class: {
            type: DataTypes.STRING(25),
            allowNull: false
        },
        background: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        alignment: {
            type: DataTypes.STRING(16),
            allowNull: false
        }
    }, {
        tableName: 'character'
    })
}