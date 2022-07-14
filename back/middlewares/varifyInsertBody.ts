import { NextFunction, Request, Response } from 'express';
const moment = require('moment');
// import moment from 'moment';

const verifyInsertBody = (req: Request, res: Response, next: NextFunction) => {
  const {
    date_time,
    reactor_id,
    biology_id,
    experiment_name,
    algea_type,
    growing_type,
    dry_weight,
    nitrogen,
    glucose,
    protein,
    chlorophyl,
    phosphorus,
    microscope_observation,
    notes,
  } = req.body;
  if (
    !(
      date_time &&
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
      microscope_observation
    )
  )
    next({ type: 400, error: JSON.stringify(req.body), msg: 'Missing params' });
  const numValues = [
    reactor_id,
    biology_id,
    dry_weight,
    nitrogen,
    glucose,
    protein,
    chlorophyl,
    phosphorus,
  ];
  const validNumbers = areNumbers(numValues);
  const strValues = [
    experiment_name,
    algea_type,
    growing_type,
    microscope_observation,
  ];
  const validStrings = areStrings(strValues);
  const validMoment = isValidMoment(date_time);
  const validNote = isStringOrNull(notes);
  try {
    if (!validNumbers)
      throw new Error(`invalid numbers: ${numValues.join(', ')}`);
    if (!validStrings)
      throw new Error(`invalid values: ${strValues.join(', ')}`);
    if (!validMoment) throw new Error(`invalid date: ${date_time}`);
    if (!validNote) throw new Error(`invalid note: ${notes}`);
    req.body.notes = notes ? notes : null;
    next();
  } catch (error) {
    next({ type: 400, error: error, msg: 'Wrong params' });
  }
};

const areNumbers = (arr: unknown[]): arr is number[] => {
  return arr.every((num) => typeof num === 'number');
};
const areStrings = (arr: unknown[]): arr is string[] => {
  return arr.every((str) => typeof str === 'string');
};
const isValidMoment = (str: unknown): str is string => {
  if (typeof str === 'string') {
    return moment(str, 'DD-MM-YYYY HH:mm').isValid();
  } else return false;
};
const isStringOrNull = (str: unknown): str is String | null => {
  return typeof str === 'string' || str === null;
};

export default verifyInsertBody;
