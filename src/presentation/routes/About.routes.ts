import { Router } from 'express';
import { AboutController } from '../controllers/About.controller';
import { validateAbout } from '../middlewares/About.validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/', AboutController.getAll);
router.post('/', validateAbout, validateRequest, AboutController.create);
router.put('/:id', validateAbout, validateRequest, AboutController.update);
router.delete('/:id', AboutController.delete);

export default router;