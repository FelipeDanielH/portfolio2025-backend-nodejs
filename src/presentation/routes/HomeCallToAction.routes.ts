import { Router } from 'express';
import { HomeCallToActionController } from '../controllers/HomeCallToAction.controller';

const router = Router();

router.get('/home/calltoaction', HomeCallToActionController.get);
router.put('/home/calltoaction', HomeCallToActionController.update);

export default router; 