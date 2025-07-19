import { Router } from 'express';
import { EducationController } from '../controllers/Education.controller';
import { validateEducation } from '../middlewares/Education.validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/', EducationController.getAll);
router.post('/', validateEducation, validateRequest, EducationController.create);
router.put('/:id', validateEducation, validateRequest, EducationController.update);
router.delete('/:id', EducationController.delete);

export default router; 