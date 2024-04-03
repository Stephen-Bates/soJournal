const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { }

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_start: {
            type: DataTypes.STRING,
            allowNull: false,
            //TODO: Figure this out
            // validate: {    
            // }
        },
        date_end: {
            type: DataTypes.STRING,
            allowNull: false,
            //TODO: Figure this out
            // validate: {    
            // }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    }
)

module.exports = Trip;