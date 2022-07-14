"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db_1 = require("../utils/db");
var Measurement = db_1.sequelize.define('Measurement', {
    date_time: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        primaryKey: true
    },
    reactor_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    biology_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    experiment_name: {
        type: sequelize_1.DataTypes.CHAR(30),
        allowNull: false
    },
    algea_type: {
        type: sequelize_1.DataTypes.CHAR(20),
        allowNull: false
    },
    growing_type: {
        type: sequelize_1.DataTypes.CHAR(15),
        allowNull: false
    },
    dry_weight: {
        type: sequelize_1.DataTypes.REAL,
        allowNull: false
    },
    nitrogen: {
        type: sequelize_1.DataTypes.REAL,
        allowNull: false
    },
    glucose: {
        type: sequelize_1.DataTypes.REAL,
        allowNull: false
    },
    protein: {
        type: sequelize_1.DataTypes.REAL,
        allowNull: false
    },
    chlorophyl: {
        type: sequelize_1.DataTypes.REAL,
        allowNull: false
    },
    phosphorus: {
        type: sequelize_1.DataTypes.REAL,
        allowNull: false
    },
    microscope_observation: {
        type: sequelize_1.DataTypes.CHAR(25),
        allowNull: false
    },
    notes: {
        type: sequelize_1.DataTypes.CHAR(200)
    }
}, {
    tableName: 'Measurements',
    timestamps: false
});
// Measurement.sync({ force: true });
exports["default"] = Measurement;
