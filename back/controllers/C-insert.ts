import { NextFunction, Request, Response } from 'express';
import { InsertRequest } from '../@types/request';
import { Measurement } from '../utils/db';
import log from '../utils/log';

// Todo: create and export insertToDb functionality controller
const insertFunc = async (
  req: InsertRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    await Measurement.create(req.body);
    log(`inderted new measurement for ${req.body}`);
    res.status(201).send('inderted new measurement');
  } catch (error) {
    const msg = `unable to insert ${req.body} to DB`;
    next({ type: 404, error, msg });
  }
};

export default insertFunc;
