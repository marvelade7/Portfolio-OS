import ContactMessage from "../models/ContactMessage.js";
import Profile from "../models/Profile.js";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
import { isMongoReady } from "../config/db.js";
import {
    profile as fallbackProfile,
    projects as fallbackProjects,
    skills as fallbackSkills,
} from "../seed/data.js";

const memoryMessages = [];
const memoryProjects = [];
const projectCategories = [
    "HTML",
    "HTML + CSS",
    "HTML CSS JS",
    "React + Tailwind",
    "APIs",
    "Full Stack",
    "Frontend",
    "Backend",
];
const projectStatuses = ["Completed", "In Progress", "Archived"];

function plain(document) {
    if (!document) return null;
    const value = document.toObject ? document.toObject() : document;
    delete value._id;
    delete value.__v;
    delete value.createdAt;
    delete value.updatedAt;
    return value;
}

function projectResponse(document) {
    if (!document) return null;
    const value = document.toObject ? document.toObject() : { ...document };
    delete value._id;
    delete value.__v;
    delete value.updatedAt;
    const techStack =
        Array.isArray(value.techStack) && value.techStack.length
            ? value.techStack
            : Array.isArray(value.stack) && value.stack.length
              ? value.stack
              : [];

    return {
        id: value._id || value.id || value.slug,
        title: value.title,
        subtitle: value.subtitle || value.type || value.category || "Project",
        description: value.description,
        category: value.category || value.type || "Full Stack",
        highlight: value.highlight || value.impact || "",
        techStack,
        tech_stack: techStack,
        github: value.github || value.repo || "",
        repo_url: value.repo || value.github || "",
        demo: value.demo || "",
        demo_url: value.demo || "",
        thumbnail: value.thumbnail || "",
        status: value.status || "In Progress",
        createdAt:
            value.createdAt || value.createdDate || new Date().toISOString(),
        slug: value.slug,
        type: value.type || value.category || "Full Stack",
        stack: techStack,
        repo: value.repo || value.github || "",
        impact: value.impact || "",
    };
}

function normalizeTechStack(body) {
    if (Array.isArray(body.techStack) && body.techStack.length) {
        return body.techStack
            .map((item) => String(item).trim())
            .filter(Boolean);
    }

    if (Array.isArray(body.stack) && body.stack.length) {
        return body.stack.map((item) => String(item).trim()).filter(Boolean);
    }

    return String(body.techStack || body.stack || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
}

function fallbackPortfolio() {
    return {
        profile: fallbackProfile,
        skills: fallbackSkills,
        projects: [...memoryProjects, ...fallbackProjects],
        source: "fallback",
    };
}

function slugify(value) {
    return (
        String(value || "project")
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "") || `project-${Date.now()}`
    );
}

function normalizeProjectPayload(body) {
    const title = String(body.title || "").trim();
    const description = String(body.description || "").trim();
    const category = projectCategories.includes(body.category)
        ? body.category
        : "Full Stack";
    const status = projectStatuses.includes(body.status)
        ? body.status
        : "In Progress";
    const techStack = normalizeTechStack(body);
    const github = String(body.github || body.repo || "").trim();

    return {
        title,
        slug: body.slug
            ? slugify(body.slug)
            : `${slugify(title)}-${Date.now().toString().slice(-5)}`,
        type: String(body.type || category).trim(),
        category,
        status,
        createdDate: body.createdDate || new Date().toISOString().slice(0, 10),
        thumbnail: String(body.thumbnail || "").trim(),
        description,
        stack: techStack.length ? techStack : ["React"],
        techStack: techStack.length ? techStack : ["React"],
        impact: String(body.impact || "Added from the Ubuntu desktop.").trim(),
        repo: github,
        github,
        demo: String(body.demo || "").trim(),
    };
}

export async function getHealth(req, res) {
    res.json({
        ok: true,
        service: "ubuntu-portfolio-api",
        mongo: isMongoReady() ? "connected" : "fallback",
        timestamp: new Date().toISOString(),
    });
}

export async function getPortfolio(req, res, next) {
    try {
        if (!isMongoReady()) {
            res.json(fallbackPortfolio());
            return;
        }

        const [profileDoc, projectDocs] = await Promise.all([
            Profile.findOne({ username: "devuser" }).lean(),
            Project.find().sort({ createdAt: 1 }).lean(),
        ]);

        const mongoProfile = plain(profileDoc) || fallbackProfile;
        res.json({
            profile: mongoProfile,
            skills: mongoProfile.skills?.length
                ? mongoProfile.skills
                : fallbackSkills,
            projects: projectDocs.length
                ? projectDocs.map(projectResponse)
                : fallbackProjects.map(projectResponse),
            source: "mongo",
        });
    } catch (error) {
        next(error);
    }
}

export async function getProfile(req, res, next) {
    try {
        if (!isMongoReady()) {
            res.json({
                profile: fallbackProfile,
                skills: fallbackSkills,
                source: "fallback",
            });
            return;
        }

        const profileDoc = await Profile.findOne({
            username: "devuser",
        }).lean();
        const mongoProfile = plain(profileDoc) || fallbackProfile;
        res.json({
            profile: mongoProfile,
            skills: mongoProfile.skills?.length
                ? mongoProfile.skills
                : fallbackSkills,
            source: profileDoc ? "mongo" : "fallback",
        });
    } catch (error) {
        next(error);
    }
}

export async function getAbout(req, res, next) {
    try {
        if (!isMongoReady()) {
            res.json({
                profile: fallbackProfile,
                experience: fallbackProfile.experience || [],
                education: fallbackProfile.education || [],
                source: "fallback",
            });
            return;
        }

        const profileDoc = await Profile.findOne({
            username: "devuser",
        }).lean();
        const mongoProfile = plain(profileDoc) || fallbackProfile;

        res.json({
            profile: mongoProfile,
            avatar: mongoProfile.avatar || mongoProfile.avatarUrl || "",
            experience:
                mongoProfile.experience || fallbackProfile.experience || [],
            education:
                mongoProfile.education || fallbackProfile.education || [],
            source: profileDoc ? "mongo" : "fallback",
        });
    } catch (error) {
        next(error);
    }
}

export async function getSkills(req, res, next) {
    try {
        if (!isMongoReady()) {
            res.json({
                skills: [
                    {
                        name: "React",
                        icon: "react",
                        level: "Advanced",
                        category: "Frontend",
                    },
                    {
                        name: "Tailwind CSS",
                        icon: "palette",
                        level: "Advanced",
                        category: "Frontend",
                    },
                    {
                        name: "Accessibility",
                        icon: "shield-check",
                        level: "Advanced",
                        category: "Frontend",
                    },
                    {
                        name: "Node.js",
                        icon: "server",
                        level: "Advanced",
                        category: "Backend",
                    },
                    {
                        name: "Express",
                        icon: "route",
                        level: "Advanced",
                        category: "Backend",
                    },
                    {
                        name: "MongoDB",
                        icon: "database",
                        level: "Advanced",
                        category: "Backend",
                    },
                    {
                        name: "Git",
                        icon: "git-branch",
                        level: "Advanced",
                        category: "Tools",
                    },
                    {
                        name: "Linux",
                        icon: "terminal",
                        level: "Advanced",
                        category: "Tools",
                    },
                ],
                source: "fallback",
            });
            return;
        }

        res.json({
            skills: (
                await Skill.find().sort({ category: 1, name: 1 }).lean()
            ).map((skill) => ({
                id: skill._id,
                name: skill.name,
                icon: skill.icon,
                level: skill.level,
                category: skill.category,
            })),
            source: "mongo",
        });
    } catch (error) {
        next(error);
    }
}

export async function getProjectById(req, res, next) {
    try {
        const { id } = req.params;

        if (!isMongoReady()) {
            const project = [...memoryProjects, ...fallbackProjects].find(
                (item) => item.slug === id || item.id === id,
            );
            if (!project) {
                res.status(404).json({
                    ok: false,
                    message: "Project not found.",
                });
                return;
            }

            res.json({ project: projectResponse(project), source: "fallback" });
            return;
        }

        const projectDoc = await Project.findById(id)
            .lean()
            .catch(() => null);
        if (!projectDoc) {
            res.status(404).json({ ok: false, message: "Project not found." });
            return;
        }

        res.json({ project: projectResponse(projectDoc), source: "mongo" });
    } catch (error) {
        next(error);
    }
}

export async function getProjectsByCategory(req, res, next) {
    try {
        const category = String(req.params.slug || req.params.cat || "")
            .trim()
            .toLowerCase();

        if (!isMongoReady()) {
            const projects = [...memoryProjects, ...fallbackProjects].filter(
                (project) => {
                    const projectCategory = String(
                        project.category || project.type || "",
                    ).toLowerCase();
                    return projectCategory === category;
                },
            );

            res.json({
                projects: projects.map(projectResponse),
                source: "fallback",
            });
            return;
        }

        const projects = await Project.find().sort({ createdAt: 1 }).lean();
        const filtered = projects.filter(
            (project) =>
                String(project.category || "").toLowerCase() === category,
        );

        res.json({ projects: filtered.map(projectResponse), source: "mongo" });
    } catch (error) {
        next(error);
    }
}

export async function updateProject(req, res, next) {
    try {
        const { id } = req.params;
        const payload = normalizeProjectPayload(req.body);

        if (!payload.title || !payload.description) {
            res.status(400).json({
                ok: false,
                message: "Please provide a title and description.",
            });
            return;
        }

        if (!isMongoReady()) {
            const memoryIndex = memoryProjects.findIndex(
                (project) => project.slug === id || project.id === id,
            );
            if (memoryIndex !== -1) {
                memoryProjects[memoryIndex] = {
                    ...memoryProjects[memoryIndex],
                    ...payload,
                };
                res.json({
                    ok: true,
                    project: projectResponse(memoryProjects[memoryIndex]),
                    source: "memory",
                });
                return;
            }

            const fallbackIndex = fallbackProjects.findIndex(
                (project) => project.slug === id || project.id === id,
            );
            if (fallbackIndex === -1) {
                res.status(404).json({
                    ok: false,
                    message: "Project not found.",
                });
                return;
            }

            const updatedFallback = {
                ...fallbackProjects[fallbackIndex],
                ...payload,
            };
            res.json({
                ok: true,
                project: projectResponse(updatedFallback),
                source: "fallback",
            });
            return;
        }

        const projectDoc = await Project.findByIdAndUpdate(id, payload, {
            new: true,
            runValidators: true,
        }).lean();
        if (!projectDoc) {
            res.status(404).json({ ok: false, message: "Project not found." });
            return;
        }

        res.json({
            ok: true,
            project: projectResponse(projectDoc),
            source: "mongo",
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(409).json({
                ok: false,
                message: "A project with that slug already exists.",
            });
            return;
        }
        next(error);
    }
}

export async function deleteProject(req, res, next) {
    try {
        const { id } = req.params;

        if (!isMongoReady()) {
            const memoryIndex = memoryProjects.findIndex(
                (project) => project.slug === id || project.id === id,
            );
            if (memoryIndex !== -1) {
                const removed = memoryProjects.splice(memoryIndex, 1)[0];
                res.json({
                    ok: true,
                    project: projectResponse(removed),
                    source: "memory",
                });
                return;
            }

            const fallbackIndex = fallbackProjects.findIndex(
                (project) => project.slug === id || project.id === id,
            );
            if (fallbackIndex === -1) {
                res.status(404).json({
                    ok: false,
                    message: "Project not found.",
                });
                return;
            }

            res.json({
                ok: true,
                project: projectResponse(fallbackProjects[fallbackIndex]),
                source: "fallback",
            });
            return;
        }

        const projectDoc = await Project.findByIdAndDelete(id).lean();
        if (!projectDoc) {
            res.status(404).json({ ok: false, message: "Project not found." });
            return;
        }

        res.json({
            ok: true,
            project: projectResponse(projectDoc),
            source: "mongo",
        });
    } catch (error) {
        next(error);
    }
}

export async function getProjects(req, res, next) {
    try {
        if (!isMongoReady()) {
            res.json({
                projects: [...memoryProjects, ...fallbackProjects].map(
                    projectResponse,
                ),
                source: "fallback",
            });
            return;
        }

        const projectDocs = await Project.find().sort({ createdAt: 1 }).lean();
        res.json({
            projects: projectDocs.length
                ? projectDocs.map(projectResponse)
                : fallbackProjects.map(projectResponse),
            source: projectDocs.length ? "mongo" : "fallback",
        });
    } catch (error) {
        next(error);
    }
}

export async function createProject(req, res, next) {
    try {
        const payload = normalizeProjectPayload(req.body);

        if (payload.title.length < 2 || payload.description.length < 8) {
            res.status(400).json({
                ok: false,
                message: "Please provide a title and description.",
            });
            return;
        }

        if (isMongoReady()) {
            const saved = await Project.create(payload);
            res.status(201).json({
                ok: true,
                project: projectResponse(saved),
                message: "Project saved successfully",
                source: "mongo",
            });
            return;
        }

        const memoryRecord = { ...payload, id: `memory-${Date.now()}` };
        memoryProjects.unshift(memoryRecord);
        res.status(201).json({
            ok: true,
            project: projectResponse(memoryRecord),
            queued: true,
            message: "Project saved successfully",
            source: "memory",
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(409).json({
                ok: false,
                message: "A project with that slug already exists.",
            });
            return;
        }
        next(error);
    }
}

export async function createContactMessage(req, res, next) {
    try {
        const payload = {
            name: String(req.body.name || "").trim(),
            email: String(req.body.email || "").trim(),
            subject: String(req.body.subject || "Portfolio inquiry").trim(),
            message: String(req.body.message || "").trim(),
            source: String(req.body.source || "ubuntu-desktop").trim(),
        };

        if (
            payload.name.length < 2 ||
            payload.message.length < 8 ||
            !/^\S+@\S+\.\S+$/.test(payload.email)
        ) {
            res.status(400).json({
                ok: false,
                message: "Please provide a name, valid email, and message.",
            });
            return;
        }

        if (isMongoReady()) {
            const saved = await ContactMessage.create(payload);
            res.status(201).json({
                ok: true,
                id: saved._id,
                message: "Message saved to MongoDB.",
            });
            return;
        }

        const memoryRecord = {
            ...payload,
            id: `memory-${Date.now()}`,
            createdAt: new Date().toISOString(),
        };
        memoryMessages.push(memoryRecord);
        res.status(201).json({
            ok: true,
            id: memoryRecord.id,
            queued: true,
            message: "Message stored in API memory.",
        });
    } catch (error) {
        next(error);
    }
}
