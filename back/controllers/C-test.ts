import { NextFunction, Request, Response } from 'express';
import { Measurement } from '../utils/db';

const testGet = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (error) {
    const msg = 'Test Failed!';
    next({ type: 404, error, msg });
  }
  const test = await Measurement.findAll();
  res.send(test);
};

export default testGet;
