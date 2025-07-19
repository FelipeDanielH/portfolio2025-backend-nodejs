import { Router } from 'express';
import { HomeCertificationsController } from '../controllers/HomeCertifications.controller';

const router = Router();

router.get('/home/certifications', HomeCertificationsController.get);
router.put('/home/certifications', HomeCertificationsController.update);

export default router; 