import { Router } from 'express';
import {
  createContactMessage,
  createProject,
  deleteProject,
  getAbout,
  getHealth,
  getProjectById,
  getPortfolio,
  getProfile,
  getProjects,
  getProjectsByCategory,
  getSkills,
  updateProject,
} from '../controllers/portfolioController.js';

const router = Router();

router.get('/health', getHealth);
router.get('/about', getAbout);
router.get('/skills', getSkills);
router.get('/portfolio', getPortfolio);
router.get('/profile', getProfile);
router.get('/projects', getProjects);
router.get('/projects/category/:cat', getProjectsByCategory);
router.get('/projects/:id', getProjectById);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);
router.post('/contact', createContactMessage);

export default router;
