import { Router } from 'express';
import { CategoryController } from '../controllers/Category.controller';
import { validateCategory } from '../middlewares/Category.validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/categorias', CategoryController.getAll);
router.post('/categorias', validateCategory, validateRequest, CategoryController.create);
router.put('/categorias/:id', validateCategory, validateRequest, CategoryController.update);
router.delete('/categorias/:id', CategoryController.delete);

export default router; 