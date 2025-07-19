import { Router } from 'express';
import { HomeContactController } from '../controllers/HomeContact.controller';

const router = Router();

router.get('/home/contact', HomeContactController.get);
router.put('/home/contact', HomeContactController.update);

export default router; 