import { Router } from 'express';
import homeRoutes from './Home.routes';
import aboutRoutes from './About.routes';
import homeAboutRoutes from './HomeAbout.routes';
import categoryRoutes from './Category.routes';
import skillRoutes from './Skill.routes';
import experienceRoutes from './Experience.routes';
import projectRoutes from './Project.routes';
import techRoutes from './Tech.routes';
import educationRoutes from './Education.routes';
import homeSkillsRoutes from './HomeSkills.routes';
import homeExperienceRoutes from './HomeExperience.routes';
import homeProjectsRoutes from './HomeProjects.routes';
import homeEducationRoutes from './HomeEducation.routes';
import homeCertificationsRoutes from './HomeCertifications.routes';
import homeHeroRoutes from './HomeHero.routes';
import homeContactRoutes from './HomeContact.routes';
import homeCallToActionRoutes from './HomeCallToAction.routes';
// Aquí puedes importar más rutas en el futuro

const router = Router();

router.use('/home', homeRoutes);
router.use('/about', aboutRoutes);
router.use('/', homeAboutRoutes);
router.use('/skills', categoryRoutes);
router.use('/skills', skillRoutes);
router.use('/experience', experienceRoutes);
router.use('/projects', projectRoutes);
router.use('/techs', techRoutes);
router.use('/education', educationRoutes);
router.use('/', homeSkillsRoutes);
router.use('/', homeExperienceRoutes);
router.use('/', homeProjectsRoutes);
router.use('/', homeEducationRoutes);
router.use('/', homeCertificationsRoutes);
router.use('/', homeHeroRoutes);
router.use('/', homeContactRoutes);
router.use('/', homeCallToActionRoutes);
// Agrega aquí los demás recursos

export default router; 