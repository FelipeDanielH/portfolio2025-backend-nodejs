import { body } from 'express-validator';

export const validateHome = [
  body('name').notEmpty().withMessage('El nombre es obligatorio'),
  body('title').notEmpty().withMessage('El título es obligatorio'),
  body('description').notEmpty().withMessage('La descripción es obligatoria'),
  body('image').optional().isURL().withMessage('La imagen debe ser una URL válida'),
  body('links.linkedin').optional().isURL().withMessage('LinkedIn debe ser una URL válida'),
  body('links.github').optional().isURL().withMessage('GitHub debe ser una URL válida'),
  body('links.portfolio').optional().isURL().withMessage('Portfolio debe ser una URL válida')
];
