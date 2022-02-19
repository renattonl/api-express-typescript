import 'dotenv/config';
import express, { Application } from 'express';
import { routes } from './routes';

// Bootstrap
export const app: Application = express();

// Application Routing
routes(app);
