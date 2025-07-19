import { Router } from 'express';
import { ProjectController } from '../controllers/Project.controller';
import { validateProject } from '../middlewares/Project.validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/', ProjectController.getAll);
router.post('/', validateProject, validateRequest, ProjectController.create);
router.put('/:id', validateProject, validateRequest, ProjectController.update);
router.delete('/:id', ProjectController.delete);

export default router; 