require('dotenv').config();
const config = {
  HOST: process.env.HOST || 'localhost',
  PORT: parseInt(process.env.PORT || '5432'),
  USER: process.env.USER || 'username',
  PASSWORD: process.env.PASSWORD || 'password',
  DATABASE: process.env.DATABASE || 'database',
  CONNECTION_STRING: process.env.CONNECTION_STRING,
};
export default config;
