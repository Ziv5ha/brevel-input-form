import { Router } from 'express';
import insertFunc from '../controllers/C-insert';
const insertRouter = Router();

insertRouter.get('/', insertFunc);

export default insertRouter;
