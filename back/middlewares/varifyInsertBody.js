"use strict";
exports.__esModule = true;
var moment = require('moment');
// import moment from 'moment';
var verifyInsertBody = function (req, res, next) {
    var _a = req.body, date_time = _a.date_time, reactor_id = _a.reactor_id, biology_id = _a.biology_id, experiment_name = _a.experiment_name, algea_type = _a.algea_type, growing_type = _a.growing_type, dry_weight = _a.dry_weight, nitrogen = _a.nitrogen, glucose = _a.glucose, protein = _a.protein, chlorophyl = _a.chlorophyl, phosphorus = _a.phosphorus, microscope_observation = _a.microscope_observation, notes = _a.notes;
    if (!(date_time &&
        reactor_id &&
        biology_id &&
        experiment_name &&
        algea_type &&
        growing_type &&
        dry_weight &&
        nitrogen &&
        glucose &&
        protein &&
        chlorophyl &&
        phosphorus &&
        microscope_observation))
        next({ type: 400, error: JSON.stringify(req.body), msg: 'Missing params' });
    var numValues = [
        reactor_id,
        biology_id,
        dry_weight,
        nitrogen,
        glucose,
        protein,
        chlorophyl,
        phosphorus,
    ];
    var validNumbers = areNumbers(numValues);
    var strValues = [
        experiment_name,
        algea_type,
        growing_type,
        microscope_observation,
    ];
    var validStrings = areStrings(strValues);
    var validMoment = isValidMoment(date_time);
    var validNote = isStringOrNull(notes);
    try {
        if (!validNumbers)
            throw new Error("invalid numbers: ".concat(numValues.join(', ')));
        if (!validStrings)
            throw new Error("invalid values: ".concat(strValues.join(', ')));
        if (!validMoment)
            throw new Error("invalid date: ".concat(date_time));
        if (!validNote)
            throw new Error("invalid note: ".concat(notes));
        req.body.notes = notes ? notes : null;
        next();
    }
    catch (error) {
        next({ type: 400, error: error, msg: 'Wrong params' });
    }
};
var areNumbers = function (arr) {
    return arr.every(function (num) { return typeof num === 'number'; });
};
var areStrings = function (arr) {
    return arr.every(function (str) { return typeof str === 'string'; });
};
var isValidMoment = function (str) {
    if (typeof str === 'string') {
        return moment(str, 'DD-MM-YYYY HH:mm').isValid();
    }
    else
        return false;
};
var isStringOrNull = function (str) {
    return typeof str === 'string' || str === null;
};
exports["default"] = verifyInsertBody;
