import { Router } from 'express';
import { SkillController } from '../controllers/Skill.controller';
import { validateSkill } from '../middlewares/Skill.validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/skills', SkillController.getAll);
router.post('/skills', validateSkill, validateRequest, SkillController.create);
router.put('/skills/:id', validateSkill, validateRequest, SkillController.update);
router.delete('/skills/:id', SkillController.delete);

export default router; 