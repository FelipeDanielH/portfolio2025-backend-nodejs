import { Router } from 'express';
import { HeroController } from '../controllers/Home.controller';
import { validateHero } from '../middlewares/Home.validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/hero', HeroController.getHero);
router.put('/hero', validateHero, validateRequest, HeroController.updateHero);

export default router;