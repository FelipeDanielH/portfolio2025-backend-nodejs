import { Request, Response, NextFunction } from 'express';

export const notFoundHandler = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  const error = new Error('Ruta no encontrada');
  (error as any).statusCode = 404;
  next(error);
};
