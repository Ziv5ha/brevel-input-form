import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

const Biology_ID = sequelize.define(
  'Biology_ID',
  {
    biology_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    biology_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'biology_id',
    timestamps: false,
  }
);

Biology_ID.sync();

export default Biology_ID;
