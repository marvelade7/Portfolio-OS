// scripts/checkProject.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Try loading .env from a couple of likely locations
dotenv.config({ path: path.resolve(__dirname, "../server/.env") });
dotenv.config({ path: path.resolve(__dirname, "../.env") }); // fallback, won't override if already loaded

if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not set. Check the .env path.");
  process.exit(1);
}

console.log("Using MONGO_URI:", process.env.MONGO_URI.replace(/:[^:@]+@/, ":****@")); // hide password in log

const Project = (await import("../server/src/models/Project.js")).default;

await mongoose.connect(process.env.MONGO_URI);
const count = await Project.countDocuments();
const dbName = mongoose.connection.db.databaseName;
console.log(`Connected to database: ${dbName}`);
console.log(`Found ${count} projects`);
await mongoose.disconnect();