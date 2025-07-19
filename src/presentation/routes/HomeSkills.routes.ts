import { Router } from 'express';
import { HomeSkillsController } from '../controllers/HomeSkills.controller';

const router = Router();

router.get('/home/skills', HomeSkillsController.get);
router.put('/home/skills', HomeSkillsController.update);

export default router; 