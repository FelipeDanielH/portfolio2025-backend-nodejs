import { body } from 'express-validator';

export const validateCategory = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('orden').isInt().withMessage('El orden debe ser un número entero')
]; 