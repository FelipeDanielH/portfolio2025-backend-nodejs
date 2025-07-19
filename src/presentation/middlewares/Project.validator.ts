import { body } from 'express-validator';

export const validateProject = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('descripcion').notEmpty().withMessage('La descripción es obligatoria'),
  body('tecnologias').isArray({ min: 1 }).withMessage('Debe haber al menos una tecnología'),
  body('estado').isIn(['en desarrollo', 'completado', 'abandonado']).withMessage('Estado inválido'),
  body('año').isInt().withMessage('El año debe ser un número entero'),
  body('links').notEmpty().withMessage('El objeto links es obligatorio'),
  body('roles').optional().isArray(),
  body('frameworks').optional().isArray(),
  body('lenguajes').optional().isArray(),
  body('herramientas').optional().isArray(),
  body('imagen').optional().isString(),
  body('links.demo').optional().isString(),
  body('links.frontend').optional().isString(),
  body('links.backend').optional().isString(),
  body('links.github').optional().isString(),
  body('links.otros').optional().isArray()
]; 