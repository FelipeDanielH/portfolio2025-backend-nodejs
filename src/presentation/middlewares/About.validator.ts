import { body } from 'express-validator';

export const validateAbout = [
  body('titulo').notEmpty().withMessage('El título es obligatorio'),
  body('descripcion').notEmpty().withMessage('La descripción es obligatoria')
]; 