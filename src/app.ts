import 'dotenv/config';
import { sequelize } from './database';
import express, { Application } from 'express';
import { routes } from './routes';

// Bootstrap
export const app: Application = express();
sequelize.sync();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Application Routing
routes(app);
