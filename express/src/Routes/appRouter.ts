import express from 'express';
import type { Request, Response } from 'express';

const appRouter = express.Router();

/**
 * GET home page route
 *
 * @param {Request<any>}  req Express request
 * @param {Response<any>} res Express response
 */
function helloWorldRoute(req: Request<any>, res: Response<any>) {
  res.send('Hello World!');
}

appRouter.get('/', helloWorldRoute);

export default appRouter;
