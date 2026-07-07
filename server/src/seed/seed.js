import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

import mongoose from "mongoose";
import Profile from "../models/Profile.js";
import Project from "../models/Project.js";
import Skill from "../models/Skill.js";
import { profile, projects, skillItems, skills } from "./data.js";

if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is not set — aborting to avoid seeding the wrong database.");
    process.exit(1);
}

await mongoose.connect(process.env.MONGO_URI);
console.log("Seeding into:", mongoose.connection.db.databaseName);

await Promise.all([
    Profile.deleteMany({}),
    Project.deleteMany({}),
    Skill.deleteMany({}),
]);
await Profile.create({ ...profile, skills });
await Project.insertMany(projects);
await Skill.insertMany(skillItems);

console.log("Seeded Ubuntu portfolio data.");
await mongoose.connection.close();
process.exit(0);