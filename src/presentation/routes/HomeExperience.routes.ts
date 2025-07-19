import { Router } from 'express';
import { HomeExperienceController } from '../controllers/HomeExperience.controller';

const router = Router();

router.get('/home/experience', HomeExperienceController.get);
router.put('/home/experience', HomeExperienceController.update);

export default router; 