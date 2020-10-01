import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import appRouter from '../Routes/appRouter';
import { route404, errorHandler } from '../Routes/errorRoute';

const server = express();

// Server set up
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cookieParser());

// Routes
server.use('/', appRouter);

// 404 and error handling
server.use(route404);
server.use(errorHandler);

export default server;
