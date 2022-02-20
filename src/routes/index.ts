import { Application, Request, Response, Router, NextFunction } from 'express';
import { responseError } from '../utils/response';
import { ClienteController } from '../controllers/ClienteController';
import { IndexController } from '../controllers/IndexController';

const _routes: [string, Router][] = [
  ['/', IndexController],
  ['/clientes', ClienteController],
];

export const routes = (app: Application) => {
  app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', ['OPTIONS', 'GET', 'POST', 'DELETE', 'PUT']);
    next();
  });
  //
  _routes.forEach((route) => {
    const [url, controlller] = route;
    app.use(url, controlller);
  });
  // Other endpoints
  app.get('/:any', (req: Request, res: Response) => {
    res.status(404).json({ message: 'El recurso solicitado no existe' });
  });
  // HandlerErrors
  app.use((err: TypeError, req: Request, res: Response, next: NextFunction) => {
    responseError(res, err);
    next(err);
  });
};
