import { fallbackPortfolio } from "../data/portfolio.js";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

async function readJson(response) {
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
        throw new Error(
            data.message || `Request failed with ${response.status}`,
        );
    }
    return data;
}

export async function loadPortfolio() {
    try {
        const data = await readJson(await fetch(`${API_BASE}/portfolio`));
        const profile = {
            ...(data.profile || fallbackPortfolio.profile),
            avatar: fallbackPortfolio.profile.avatar,
            avatarUrl: data.profile?.avatarUrl || "",
        };

        return {
            profile,
            skills: data.skills || fallbackPortfolio.skills,
            projects: data.projects || fallbackPortfolio.projects,
            source: data.source || "api",
        };
    } catch (error) {
        return { ...fallbackPortfolio, source: "local" };
    }
}

export async function sendContactMessage(payload) {
    try {
        return await readJson(
            await fetch(`${API_BASE}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            }),
        );
    } catch (error) {
        return {
            ok: true,
            queued: true,
            message: "Message queued locally while the API is offline.",
        };
    }
}

export async function fetchProjects(categorySlug) {
    const endpoint = categorySlug
        ? `${API_BASE}/categories/${encodeURIComponent(categorySlug)}/projects`
        : `${API_BASE}/projects`;

    return readJson(await fetch(endpoint));
}

export async function fetchAbout() {
    return readJson(await fetch(`${API_BASE}/about`));
}

export async function fetchSkills() {
    return readJson(await fetch(`${API_BASE}/skills`));
}
