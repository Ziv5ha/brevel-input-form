"use strict";
exports.__esModule = true;
var moment = require('moment');
// import moment from 'moment';
var log = function (msg) {
    var timestamp = moment().format('ddd, MMM Do YYYY, H:mm:ss');
    console.log("".concat(timestamp, " | ").concat(msg));
};
exports["default"] = log;
