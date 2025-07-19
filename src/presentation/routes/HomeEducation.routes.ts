import { Router } from 'express';
import { HomeEducationController } from '../controllers/HomeEducation.controller';

const router = Router();

router.get('/home/education', HomeEducationController.get);
router.put('/home/education', HomeEducationController.update);

export default router; 