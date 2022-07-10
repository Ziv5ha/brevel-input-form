import { Router } from 'express';
import testGet from '../controllers/C-test';
const testRouter = Router();

testRouter.get('/', testGet);

export default testRouter;
