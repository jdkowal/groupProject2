const { type } = require('os');
const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Coupon extends Model { }

Coupon.init(
    {    
        id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    medication_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "medication",
            key: "id",
        },
        },
        coupon_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        coupon_url: {

        type: DataTypes.STRING,
        allowNull: false
        }
    },
    {
        sequelize, tableName: "coupon",freezeTableName: true
    }
);

module.exports = Coupon;