import { Router } from 'express';
import {
  getHome,
  createHome,
  updateHome,
  deleteHome
} from '../controllers/Home.controller';

import { validateHome } from '../middlewares/Home.validator';
import { validateRequest } from '../middlewares/validateRequest';

const router = Router();

router.get('/', getHome);
router.post('/', validateHome, validateRequest, createHome);
router.put('/', validateHome, validateRequest, updateHome);
router.delete('/', deleteHome);

export default router;
