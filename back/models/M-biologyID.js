'use strict';
exports.__esModule = true;
var sequelize_1 = require('sequelize');
var db_1 = require('../utils/db');
var Biology_ID = db_1.sequelize.define(
  'Biology_ID',
  {
    biology_id: {
      type: sequelize_1.DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    biology_name: {
      type: sequelize_1.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'biology_id',
    timestamps: false,
  }
);
// Biology_ID.sync();
exports['default'] = Biology_ID;
