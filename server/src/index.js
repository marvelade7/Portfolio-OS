import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });

import cors from "cors";
import express from "express";
import helmet from "helmet";
import mongoose from "mongoose";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";

const app = express();
const port = Number(process.env.PORT || 5181);
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5180")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(
    helmet({
        crossOriginResourcePolicy: false,
    }),
);
app.use(
    cors({
        origin(origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
                return;
            }
            callback(new Error(`Origin ${origin} is not allowed by CORS`));
        },
    }),
);
app.use(express.json({ limit: "1mb" }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        ok: true,
        service: "ubuntu-portfolio-api",
        routes: [
            "/api/health",
            "/api/about",
            "/api/skills",
            "/api/portfolio",
            "/api/profile",
            "/api/projects",
            "/api/category/:slug",
            "/api/categories/:slug/projects",
            "/api/projects/:id",
            "/api/contact",
        ],
    });
});
app.use("/api", portfolioRoutes);

app.use((req, res) => {
    res.status(404).json({ ok: false, message: "Route not found." });
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).json({
        ok: false,
        message: "Server error.",
    });
});

await connectDB();

const server = app.listen(port, () => {
    console.log(`Ubuntu portfolio API listening on http://localhost:${port}`);
});

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

async function shutdown() {
    server.close(async () => {
        await mongoose.connection.close();
        process.exit(0);
    });
}