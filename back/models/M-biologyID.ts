import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

const Biology_ID = sequelize.define(
  'Biology_ID',
  {
    biologist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'biologist_id',
    timestamps: false,
  }
);

Biology_ID.sync();

export default Biology_ID;
