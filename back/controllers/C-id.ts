import { NextFunction, Request, Response } from 'express';
import Biology_ID from '../models/M-biologyID';
import Reactor_ID from '../models/M-reactorID';
import log from '../utils/log';

export const getReactorIDs = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reactors = {} as { [key: string]: string };
    const reactorsIDRaw = await Reactor_ID.findAll();
    reactorsIDRaw.forEach((reactor) => {
      const id = reactor.getDataValue('reactor_id');
      const name = reactor.getDataValue('reactor_name');
      reactors[id] = name;
    });
    log('sent Reactor_IDs');
    res.send(JSON.stringify(reactors));
  } catch (error) {
    const msg = `unable to get Reactors form DB`;
    next({ type: 404, error, msg });
  }
};

export const getBiologyIDs = async (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const biologies = {} as { [key: string]: string };
    const biologyIDRaw = await Biology_ID.findAll();
    biologyIDRaw.forEach((biology) => {
      const id = biology.getDataValue('biologist_id');
      const name = biology.getDataValue('name');
      biologies[id] = name;
    });
    log('sent Biologists IDs');
    res.send(biologies);
  } catch (error) {
    const msg = `unable to get Biologists form DB`;
    next({ type: 404, error, msg });
  }
};
