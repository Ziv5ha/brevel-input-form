import { Request, Response } from 'express';
import * as path from 'path';

const servePage = (_req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, `../public/index.html`));
};

export default servePage;
