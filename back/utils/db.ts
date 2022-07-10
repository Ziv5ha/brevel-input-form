// Todo: configure sequelize
import { DataTypes, Sequelize } from 'sequelize';
import config from './config';
const { HOST, PORT, USER, PASSWORD, DATABASE, CONNECTION_STRING } = config;

const sequelize = CONNECTION_STRING
  ? new Sequelize(CONNECTION_STRING)
  : new Sequelize(DATABASE, USER, PASSWORD, {
      port: PORT,
      host: HOST,
      dialect: 'postgres',
    });

const Measurement = sequelize.define(
  'Measurement',
  {
    // Model attributes are defined here
    Date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Reactor_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Biology_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Experiment_Name: {
      type: DataTypes.CHAR(20),
      allowNull: false,
    },
    Algea_Type: {
      type: DataTypes.CHAR(15),
      allowNull: false,
    },
    Dry_Weight: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    Nitrogen: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    Glucose: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    Protein: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    Chlorophyl: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    phosphorus: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    Microscope_Observation: {
      type: DataTypes.CHAR(20),
      allowNull: false,
    },
    Notes: {
      type: DataTypes.CHAR(200),
    },
  },
  {
    tableName: 'Measurements',
    timestamps: false,
  }
);

Measurement.sync();

export { sequelize, Measurement };
