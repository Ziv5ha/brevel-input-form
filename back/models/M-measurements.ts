import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

const Measurement = sequelize.define(
  'Measurement',
  {
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true,
    },
    reactor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    biology_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    experiment_name: {
      type: DataTypes.CHAR(30),
      allowNull: false,
    },
    algea_type: {
      type: DataTypes.CHAR(20),
      allowNull: false,
    },
    growing_type: {
      type: DataTypes.CHAR(15),
      allowNull: false,
    },
    dry_weight: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    nitrogen: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    glucose: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    protein: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    chlorophyl: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    phosphorus: {
      type: DataTypes.REAL,
      allowNull: false,
    },
    microscope_observation: {
      type: DataTypes.CHAR(25),
      allowNull: false,
    },
    notes: {
      type: DataTypes.CHAR(200),
    },
  },
  {
    tableName: 'manual_measurement',
    timestamps: false,
  }
);

// Measurement.sync({ force: true });

export default Measurement;
