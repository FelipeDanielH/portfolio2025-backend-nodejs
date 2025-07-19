import { body } from 'express-validator';

export const validateTech = [
  body('tipo').isIn(['lenguaje', 'framework', 'rol', 'herramienta']).withMessage('Tipo inválido'),
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('icono').optional().isString()
]; 