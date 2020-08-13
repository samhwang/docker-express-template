import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import appRouter from './Routes/appRouter';
import { route404, errorHandler } from './Util/errorRoute';

const app = express();
const port = 80;

// Server set up
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Routes
app.use('/', appRouter);

// 404 and error handling
app.use(route404);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

export default app;