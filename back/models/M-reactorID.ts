import { DataTypes } from 'sequelize';
import { sequelize } from '../utils/db';

const Reactor_ID = sequelize.define(
  'Reactor_ID',
  {
    reactor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    reactor_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'reactor_id',
    timestamps: false,
  }
);

Reactor_ID.sync();

export default Reactor_ID;
