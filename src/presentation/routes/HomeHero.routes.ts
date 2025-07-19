import { Router } from 'express';
import { HomeHeroController } from '../controllers/HomeHero.controller';

const router = Router();

router.get('/home/hero', HomeHeroController.get);
router.put('/home/hero', HomeHeroController.update);

export default router; 