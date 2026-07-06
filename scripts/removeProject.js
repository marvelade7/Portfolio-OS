#!/usr/bin/env node
/**
 * Local-only script. Do not import this into the Express app or expose it via HTTP.
 */
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: require("path").resolve(process.cwd(), ".env") });

async function main() {
    const slug = process.argv[2];
    if (!slug) {
        throw new Error("Usage: node scripts/removeProject.js <slug>");
    }

    const { default: Project } =
        await import("../server/src/models/Project.js");
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        throw new Error("MONGO_URI is not set.");
    }

    await mongoose.connect(mongoUri, {
        serverSelectionTimeoutMS: 2500,
    });

    try {
        const removed = await Project.findOneAndDelete({ slug }).lean();
        if (!removed) {
            console.log(`No project found for slug: ${slug}`);
            return;
        }

        console.log(`Removed project: ${removed.title} (${slug})`);
    } finally {
        await mongoose.disconnect();
    }
}

main()
    .then(() => process.exit(0))
    .catch(async (error) => {
        console.error(`Failed to remove project: ${error.message}`);
        await mongoose.disconnect().catch(() => {});
        process.exit(1);
    });
