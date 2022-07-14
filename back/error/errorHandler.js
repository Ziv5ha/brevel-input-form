"use strict";
exports.__esModule = true;
// Todo create and export errorHandler
var log_1 = require("../utils/log");
var errorHandler = function (err, req, res, next) {
    console.log('err');
    var type = err.type, error = err.error, msg = err.msg;
    switch (type) {
        case 404:
            (0, log_1["default"])(msg);
            (0, log_1["default"])(error);
            res
                .status(404)
                .send('Could not get a response from the DB. Either a problem with the query or the DB server. Check server logs for details.');
            break;
        case 400:
            (0, log_1["default"])(msg);
            (0, log_1["default"])(error);
            res
                .status(400)
                .send('Something went wrong. Check server logs for details.');
            break;
        case 503:
            (0, log_1["default"])('Failed connecting to DB');
            res.status(503).send('Failed connecting to DB');
            break;
        default:
            (0, log_1["default"])('OH NO! something went wrong! check logs for details');
            (0, log_1["default"])(error);
            res.status(400).send('something went wrong! check logs for details');
            break;
    }
};
exports["default"] = errorHandler;
