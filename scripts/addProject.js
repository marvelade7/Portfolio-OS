#!/usr/bin/env node
/**
 * Local-only script. Do not import this into the Express app or expose it via HTTP.
 */
const fs = require("fs/promises");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

const defaultProject = {
    title: "Aptly CRM",
    subtitle: "SaaS Dashboard",
    status: "Completed",
    description:
        "A quiet operations dashboard with lead scoring, pipeline views, and fast keyboard-led search.",
    highlight: "Cut weekly reporting time by 62%.",
    techStack: ["React", "Express", "MongoDB", "Tailwind"],
    repo: "https://www.github.com/marvelade7",
    demo: "https://example.com",
};

async function loadProjectInput() {
    const jsonPath = path.resolve(__dirname, "projects-to-add.json");

    try {
        const fileText = await fs.readFile(jsonPath, "utf8");
        const parsed = JSON.parse(fileText);
        if (Array.isArray(parsed)) {
            return parsed[0] || defaultProject;
        }
        return parsed;
    } catch (error) {
        if (error.code === "ENOENT") {
            return defaultProject;
        }
        throw error;
    }
}

async function main() {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        throw new Error("MONGO_URI is not set.");
    }

    const [{ default: Project }, { normalizeProjectPayload }] =
        await Promise.all([
            import("../server/src/models/Project.js"),
            import("../server/src/controllers/portfolioController.js"),
        ]);

    const projectInput = await loadProjectInput();
    const normalizedProject = normalizeProjectPayload(projectInput);

    if (!normalizedProject.slug) {
        throw new Error("Project slug could not be generated.");
    }

    await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 2500,
    });

    try {
        const result = await Project.updateOne(
            { slug: normalizedProject.slug },
            normalizedProject,
            { upsert: true },
        );

        const inserted = Boolean(result.upsertedCount || result.upsertedId);
        const action = inserted ? "inserted" : "updated";
        console.log(
            `Project ${action}: ${normalizedProject.title} (${normalizedProject.slug})`,
        );
    } finally {
        await mongoose.disconnect();
    }
}

main()
    .then(() => process.exit(0))
    .catch(async (error) => {
        console.error(`Failed to save project: ${error.message}`);
        await mongoose.disconnect().catch(() => {});
        process.exit(1);
    });
