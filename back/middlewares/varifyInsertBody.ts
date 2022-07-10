import { NextFunction, Request, Response } from 'express';
import moment from 'moment';

const verifyInsertBody = (req: Request, res: Response, next: NextFunction) => {
  const {
    Date,
    Reactor_ID,
    Biology_ID,
    Experiment_Name,
    Algea_Type,
    Dry_Weight,
    Nitrogen,
    Glucose,
    Protein,
    Chlorophyl,
    phosphorus,
    Microscope_Observation,
    Notes,
  } = req.body;
  if (
    !(
      Date &&
      Reactor_ID &&
      Biology_ID &&
      Experiment_Name &&
      Algea_Type &&
      Dry_Weight &&
      Nitrogen &&
      Glucose &&
      Protein &&
      Chlorophyl &&
      phosphorus &&
      Microscope_Observation
    )
  )
    next({ type: 400, msg: 'Missing params' });
  const validNumbers = areNumbers([
    Reactor_ID,
    Biology_ID,
    Dry_Weight,
    Nitrogen,
    Glucose,
    Protein,
    Chlorophyl,
    phosphorus,
  ]);
  const validStrings = areStrings([
    Experiment_Name,
    Algea_Type,
    Microscope_Observation,
  ]);
  const validMoment = isValidMoment(Date);
  const validNote = isStringOrNull(Notes);
  if (validNumbers && validStrings && validMoment && validNote) next();
  else next({ type: 400, msg: 'Wrong params' });
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
