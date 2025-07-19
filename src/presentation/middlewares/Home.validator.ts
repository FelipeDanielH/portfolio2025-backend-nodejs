import { body } from 'express-validator';

export const validateHero = [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('titulo').notEmpty().withMessage('El título es obligatorio'),
  body('claim').notEmpty().withMessage('El claim es obligatorio'),
  body('telefono').notEmpty().withMessage('El teléfono es obligatorio'),
  body('ubicacion').notEmpty().withMessage('La ubicación es obligatoria'),
  body('email').isEmail().withMessage('El email debe ser válido'),
  body('linkedin').notEmpty().withMessage('El LinkedIn es obligatorio'),
  body('cv').notEmpty().withMessage('El enlace al CV es obligatorio'),
  body('boton_contacto').notEmpty().withMessage('El texto del botón de contacto es obligatorio')
];