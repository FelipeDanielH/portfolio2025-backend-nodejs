import { body } from 'express-validator';

export const validateEducation = [
  body('tipo').isIn(['formacion', 'certificacion']).withMessage('Tipo inválido'),
  body('titulo').notEmpty().withMessage('El título es obligatorio'),
  body('institucion').notEmpty().withMessage('La institución es obligatoria'),
  body('estado').isIn(['En curso', 'Completado', 'Abandonado']).withMessage('Estado inválido'),
  body('fecha_inicio').optional().isString(),
  body('fecha_fin').optional().custom((value) => value === null || typeof value === 'string').withMessage('fecha_fin debe ser string o null'),
  body('descripcion').optional().isString(),
  body('aprendizajes').optional().isArray(),
  body('certificado_url').optional().custom((value) => value === null || typeof value === 'string').withMessage('certificado_url debe ser string o null'),
  body('links_relevantes').optional().isArray()
]; 