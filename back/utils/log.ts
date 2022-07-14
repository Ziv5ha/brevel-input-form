const moment = require('moment');
// import moment from 'moment';

const log = (msg: string) => {
  const timestamp = moment().format('ddd, MMM Do YYYY, H:mm:ss');
  console.log(`${timestamp} | ${msg}`);
};

export default log;
