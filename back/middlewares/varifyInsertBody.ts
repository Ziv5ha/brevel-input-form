import { NextFunction, Request, Response } from 'express';
import moment from 'moment';

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
      microscope_observation &&
      notes
    )
  )
    next({ type: 400, error: JSON.stringify(req.body), msg: 'Missing params' });
  const validNumbers = areNumbers([
    reactor_id,
    biology_id,
    dry_weight,
    nitrogen,
    glucose,
    protein,
    chlorophyl,
    phosphorus,
  ]);
  const validStrings = areStrings([
    experiment_name,
    algea_type,
    growing_type,
    microscope_observation,
  ]);
  const validMoment = isValidMoment(date_time);
  const validNote = isStringOrNull(notes);
  if (validNumbers && validStrings && validMoment && validNote) next();
  else
    next({ type: 400, error: JSON.stringify(req.body), msg: 'Wrong params' });
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
