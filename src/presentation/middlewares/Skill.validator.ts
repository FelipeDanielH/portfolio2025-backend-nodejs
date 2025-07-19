import { body } from 'express-validator';

export const validateSkill = [
  body('categoria_id').notEmpty().withMessage('La categoría es obligatoria'),
  body('tecnologia').notEmpty().withMessage('La tecnología es obligatoria'),
  body('nivel').isIn(['Básico', 'Intermedio', 'Avanzado', 'Experto']).withMessage('Nivel inválido'),
  body('puntuacion').isInt({ min: 1, max: 10 }).withMessage('La puntuación debe ser un número entre 1 y 10'),
  body('descripcion').optional().isString(),
  body('conceptos').optional().isArray(),
  body('orden').optional().isInt()
]; 