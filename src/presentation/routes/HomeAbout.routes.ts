import { Router } from 'express';
import { HomeAboutController } from '../controllers/HomeAbout.controller';

const router = Router();

router.get('/home/about', HomeAboutController.get);
router.put('/home/about', HomeAboutController.update);

export default router; 