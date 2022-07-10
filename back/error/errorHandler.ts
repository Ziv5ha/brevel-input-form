import { NextFunction, Request, Response } from 'express';

// Todo create and export errorHandler
import log from '../utils/log';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { type, error, msg } = err;
  switch (type) {
    case 404:
      log(msg);
      log(error);
      res
        .status(404)
        .send(
          'Could not get a response from the DB. Either a problem with the query or the DB server. Check server logs for details.'
        );
      break;
    case 503:
      log('Failed connecting to DB');
      res.status(503).send('Failed connecting to DB');
      break;

    default:
      log('OH NO! something went wrong! check logs for details');
      log(error);
      res.status(400).send('something went wrong! check logs for details');
      break;
  }
};

module.exports = { errorHandler };
