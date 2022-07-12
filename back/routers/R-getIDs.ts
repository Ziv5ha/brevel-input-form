import { Router } from 'express';
import { getBiologyIDs, getReactorIDs } from '../controllers/C-id';
const idRouter = Router();

idRouter.get('/biology', getBiologyIDs);
idRouter.get('/reactor', getReactorIDs);

export default idRouter;
