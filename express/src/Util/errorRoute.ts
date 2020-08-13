import type { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';

/**
 * Catch 404 and forward to error handler
 *
 * @param {Request<any>}  req Express request
 * @param {Response<any>} res Express response
 * @param {NextFunction}  next Callback
 */
function route404(
  _req: Request<any>,
  _res: Response<any>,
  next: NextFunction,
) {
  next(createError(404));
}

type ResponeError = Error & {
  status?: number;
}

/**
 * Error handler function
 *
 * @param {ResponeError}  err Error
 * @param {Request<any>}  req Express request
 * @param {Response<any>} res Express response
 */
function errorHandler(
  err: ResponeError,
  req: Request<any>,
  res: Response<any>,
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // returns error message
  res.status(err.status || 500);
  res.send('404 Error');
}

export { route404, errorHandler };
