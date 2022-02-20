import { Router, Response, Request, NextFunction } from 'express';
import { responseSuccess } from '../utils/response';
import ClienteService from '../services/ClienteService';

export const ClienteController: Router = Router();

ClienteController.get('/promedio/edades', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rows = await ClienteService.avgFechaNacimiento();
    return responseSuccess(res, 200, rows);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

ClienteController.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rows = await ClienteService.findAll();
    return responseSuccess(res, 200, rows);
  } catch (error) {
    next(error);
  }
});

ClienteController.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const row = await ClienteService.find(parseFloat(id));
    return responseSuccess(res, 200, row);
  } catch (error) {
    next(error);
  }
});

ClienteController.post('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const row = await ClienteService.create(req.body);
    return responseSuccess(res, 201, row);
  } catch (error) {
    next(error);
  }
});

ClienteController.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const row = await ClienteService.update(parseFloat(id), req.body);
    return responseSuccess(res, 200, row);
  } catch (error) {
    next(error);
  }
});

ClienteController.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const row = await ClienteService.destroy(parseFloat(id));
    return responseSuccess(res, 200, row);
  } catch (error) {
    next(error);
  }
});
