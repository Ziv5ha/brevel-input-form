// Todo: configure sequelize
import { Sequelize } from 'sequelize';
import config from './config';
const { HOST, PORT, USER, PASSWORD, DATABASE, CONNECTION_STRING } = config;

const sequelize = CONNECTION_STRING
  ? new Sequelize(CONNECTION_STRING)
  : new Sequelize(DATABASE, USER, PASSWORD, {
      port: PORT,
      host: HOST,
      dialect: 'postgres',
    });

export default sequelize;
