const { type } = require('os');
const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Medication extends Model { }

Medication.init({


    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        },
    },
    medication_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    medication_description: {
        type: DataTypes.STRING,
        allowNull: false
    }
    },
    {
        sequelize, tableName: "medication",freezeTableName: true
    }
);

module.exports = Medication;



