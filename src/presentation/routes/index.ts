import { Router } from 'express';
import homeRoutes from './Home.routes';
import aboutRoutes from './About.routes';
import homeAboutRoutes from './HomeAbout.routes';
import categoryRoutes from './Category.routes';
import skillRoutes from './Skill.routes';
import experienceRoutes from './Experience.routes';
// Aquí puedes importar más rutas en el futuro

const router = Router();

router.use('/home', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/', homeAboutRoutes);
router.use('/skills', categoryRoutes);
router.use('/skills', skillRoutes);
router.use('/experience', experienceRoutes);
// Agrega aquí los demás recursos

export default router; 