import { body } from 'express-validator';

export const validateExperience = [
  body('rol').notEmpty().withMessage('El rol es obligatorio'),
  body('empresa').notEmpty().withMessage('La empresa es obligatoria'),
  body('ubicacion').notEmpty().withMessage('La ubicación es obligatoria'),
  body('fecha_inicio').notEmpty().withMessage('La fecha de inicio es obligatoria'),
  body('descripcion').notEmpty().withMessage('La descripción es obligatoria'),
  body('modalidad').optional().isIn(['Remoto', 'Presencial', 'Híbrido']),
  body('equipo').optional().isString(),
  body('sector').optional().isString(),
  body('fecha_fin').optional().custom((value) => value === null || typeof value === 'string').withMessage('fecha_fin debe ser string o null'),
  body('responsabilidades').optional().isArray(),
  body('logros').optional().isArray(),
  body('tecnologias').optional().isArray()
]; 