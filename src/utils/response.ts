import { NotFoundException } from '../exceptions/NotFoundException';
import { Response } from 'express';

export const responseSuccess = (res: Response, statusCode: number, data: object) => {
  return res.status(statusCode).json(data);
};

export const responseError = (res: Response, error: TypeError) => {
  if (error instanceof NotFoundException) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res.status(500).json({ message: 'Hubo un problema en el servidor' });
};
