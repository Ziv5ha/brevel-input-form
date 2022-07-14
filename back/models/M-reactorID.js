"use strict";
exports.__esModule = true;
var sequelize_1 = require("sequelize");
var db_1 = require("../utils/db");
var Reactor_ID = db_1.sequelize.define('Reactor_ID', {
    reactor_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    reactor_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'reactor_id',
    timestamps: false
});
Reactor_ID.sync();
exports["default"] = Reactor_ID;
