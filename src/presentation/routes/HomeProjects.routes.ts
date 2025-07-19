import { Router } from 'express';
import { HomeProjectsController } from '../controllers/HomeProjects.controller';

const router = Router();

router.get('/home/projects', HomeProjectsController.get);
router.put('/home/projects', HomeProjectsController.update);

export default router; 