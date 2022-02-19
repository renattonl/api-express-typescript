import { Application, Router } from 'express';
import { IndexController } from '../controllers/IndexController';

const _routes: [string, Router][] = [['/', IndexController]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, controlller] = route;
    app.use(url, controlller);
  });
};
