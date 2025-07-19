import { Router } from 'express';
import { TechController } from '../controllers/Tech.controller';
import { validateTech } from '../middlewares/Tech.validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/', TechController.getAll);
router.post('/', validateTech, validateRequest, TechController.create);
router.put('/:id', validateTech, validateRequest, TechController.update);
router.delete('/:id', TechController.delete);

export default router; 