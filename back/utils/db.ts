// Todo: configure sequelize
import { DataTypes, Sequelize } from 'sequelize';
import config from './config';
import log from './log';
const { HOST, PORT, USER, PASSWORD, DATABASE, CONNECTION_STRING } = config;

const sequelize = CONNECTION_STRING
  ? new Sequelize(CONNECTION_STRING)
  : new Sequelize(DATABASE, USER, PASSWORD, {
      port: PORT,
      host: HOST,
      dialect: 'postgres',
      logging: false,
    });

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    log('\x1b[33mconnected to:\x1b[0m');
    console.log({
      host: HOST,
      port: PORT,
      database: DATABASE,
      user: USER,
      password: PASSWORD,
    });
  } catch (error) {
    log('\x1b[41mfailed connecting to:\x1b[0m');
    console.log({
      host: HOST,
      port: PORT,
      database: DATABASE,
      user: USER,
      password: PASSWORD,
    });
    console.error(
      'Check if the DB is online and the login info is correct then restart the server'
    );
  }
};

export { sequelize, connectToDB };
