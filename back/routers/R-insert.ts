import { Router } from 'express';
import insertFunc from '../controllers/C-insert';
const insertRouter = Router();

insertRouter.post('/', insertFunc);

export default insertRouter;
