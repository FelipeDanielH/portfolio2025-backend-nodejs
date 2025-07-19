import { Router } from 'express';
import { ExperienceController } from '../controllers/Experience.controller';
import { validateExperience } from '../middlewares/Experience.validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/', ExperienceController.getAll);
router.post('/', validateExperience, validateRequest, ExperienceController.create);
router.put('/:id', validateExperience, validateRequest, ExperienceController.update);
router.delete('/:id', ExperienceController.delete);

export default router; 