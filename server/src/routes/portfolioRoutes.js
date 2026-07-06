import { Router } from "express";
import {
    createContactMessage,
    getAbout,
    getHealth,
    getProjectById,
    getPortfolio,
    getProfile,
    getProjects,
    getProjectsByCategory,
    getSkills,
} from "../controllers/portfolioController.js";

const router = Router();

router.get("/health", getHealth);
router.get("/about", getAbout);
router.get("/skills", getSkills);
router.get("/portfolio", getPortfolio);
router.get("/profile", getProfile);
router.get("/projects", getProjects);
router.get("/category/:slug", getProjectsByCategory);
router.get("/categories/:slug/projects", getProjectsByCategory);
router.get("/projects/category/:cat", getProjectsByCategory);
router.get("/projects/:id", getProjectById);
router.post("/contact", createContactMessage);

export default router;
