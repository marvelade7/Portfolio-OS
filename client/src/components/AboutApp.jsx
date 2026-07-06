import { useEffect, useMemo, useState } from "react";
import {
    BadgeCheck,
    Database,
    ExternalLink,
    GitBranch,
    GraduationCap,
    LayoutGrid,
    Layers3,
    MapPin,
    Palette,
    Route,
    ServerCog,
    ShieldCheck,
    Terminal,
    UserCircle2,
} from "lucide-react";
import { fetchAbout, fetchSkills } from "../lib/api.js";

const browserUrl = "file:///home/marvelade/about";

const iconBySkillGroup = {
    Frontend: LayoutGrid,
    Backend: ServerCog,
    Tools: BadgeCheck,
};

const iconBySkillName = {
    react: Layers3,
    "next.js": Layers3,
    "tailwind css": Palette,
    bootstrap: Palette,
    typescript: BadgeCheck,
    javascript: Terminal,
    "node.js": ServerCog,
    "express.js": Route,
    mongodb: Database,
    graphql: ServerCog,
    git: GitBranch,
    github: GitBranch,
    linux: Terminal,
};

function skillIconFor(skill) {
    return (
        iconBySkillName[String(skill.icon || skill.name || "").toLowerCase()] ||
        iconBySkillGroup[skill.category] ||
        BadgeCheck
    );
}

function normalizeSkills(skillsList) {
    if (!Array.isArray(skillsList)) return [];

    if (skillsList.length && Array.isArray(skillsList[0]?.items)) {
        return skillsList.flatMap((skillGroup) =>
            skillGroup.items.map((item) => ({
                name: item,
                icon: item,
                level: "Advanced",
                category: skillGroup.group,
            })),
        );
    }

    return skillsList;
}

export default function AboutApp({ portfolio }) {
    const [aboutData, setAboutData] = useState({
        profile: portfolio.profile,
        experience: portfolio.profile.experience || [],
        education: portfolio.profile.education || [],
        avatar: portfolio.profile.avatar || portfolio.profile.avatarUrl || "",
    });
    const [skills, setSkills] = useState(
        normalizeSkills(portfolio.skills || []),
    );

    useEffect(() => {
        let active = true;

        Promise.all([fetchAbout(), fetchSkills()])
            .then(([aboutResponse, skillsResponse]) => {
                if (!active) return;

                setAboutData({
                    profile: aboutResponse.profile || portfolio.profile,
                    experience:
                        aboutResponse.experience ||
                        portfolio.profile.experience ||
                        [],
                    education:
                        aboutResponse.education ||
                        portfolio.profile.education ||
                        [],
                    avatar:
                        portfolio.profile.avatar ||
                        aboutResponse.avatar ||
                        portfolio.profile.avatarUrl ||
                        "",
                });
                setSkills(
                    normalizeSkills(
                        skillsResponse.skills || portfolio.skills || [],
                    ),
                );
            })
            .catch(() => {
                if (!active) return;
                setAboutData({
                    profile: portfolio.profile,
                    experience: portfolio.profile.experience || [],
                    education: portfolio.profile.education || [],
                    avatar:
                        portfolio.profile.avatar ||
                        portfolio.profile.avatarUrl ||
                        "",
                });
                setSkills(normalizeSkills(portfolio.skills || []));
            });

        return () => {
            active = false;
        };
    }, [portfolio]);

    const heroStats = useMemo(
        () => aboutData.profile.stats || [],
        [aboutData.profile.stats],
    );

    const profile = aboutData.profile;
    const avatar =
        aboutData.avatar || profile.avatar || profile.avatarUrl || "";

    return (
        <div className="h-full overflow-auto bg-[#efe9e6] text-[#241a22]">
            <div className="sticky top-0 z-10 border-b border-black/10 bg-[#f7f3f0]/95 px-5 py-3 backdrop-blur-xl">
                <div className="flex items-center gap-3 rounded-md border border-black/10 bg-white px-3 py-2 shadow-sm">
                    <div className="flex items-center gap-1.5 pr-1">
                        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-black/10 bg-[#f4f1ee] px-3 py-2 text-sm text-[#6e5a67]">
                        <span className="flex items-center gap-2 text-[#8b7382]">
                            <UserCircle2 size={15} />
                            Browser
                        </span>
                        <span className="truncate font-medium text-[#3b2d36]">
                            {browserUrl}
                        </span>
                    </div>
                    <a
                        href={`mailto:${profile.email}`}
                        className="hidden rounded-md border border-black/10 bg-white px-3 py-2 text-sm font-medium text-[#3b2d36] transition hover:border-[#E95420] hover:text-[#C33F13] md:inline-flex"
                    >
                        Contact
                    </a>
                </div>
            </div>

            <div className="space-y-10 px-5 py-6">
                <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                    <div className="space-y-5">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#d9ccc6] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b7382]">
                            About Me
                        </div>
                        <div className="flex flex-wrap items-end gap-4">
                            {avatar ? (
                                <img
                                    src={avatar}
                                    alt={profile.name}
                                    className="h-24 w-24 shrink-0 rounded-3xl object-cover shadow-[0_12px_32px_rgba(51,13,38,0.25)]"
                                />
                            ) : (
                                <div className="grid h-24 w-24 shrink-0 place-items-center rounded-3xl bg-[#330d26] text-3xl font-semibold text-white shadow-[0_12px_32px_rgba(51,13,38,0.25)]">
                                    {profile.avatarInitials}
                                </div>
                            )}
                            <div className="min-w-0">
                                <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
                                    {profile.name}
                                </h1>
                                <p className="mt-1 text-xl font-medium text-[#6b4f60]">
                                    {profile.title}
                                </p>
                                <p className="mt-2 flex items-center gap-2 text-sm text-[#7d6a75]">
                                    <MapPin size={15} />
                                    {profile.location}
                                </p>
                            </div>
                        </div>
                        <p className="max-w-2xl text-base leading-8 text-[#3a2c35]">
                            {profile.bio}
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {heroStats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-[#dccfc9] bg-white px-4 py-3 shadow-sm"
                                >
                                    <div className="text-lg font-semibold text-[#330d26]">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs uppercase tracking-[0.18em] text-[#8d7383]">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-[#d8ccc6] bg-white p-5 shadow-[0_18px_50px_rgba(51,13,38,0.08)]">
                        <div className="rounded-[1.1rem] bg-gradient-to-br from-[#330d26] via-[#4a183a] to-[#23111d] p-5 text-white">
                            <div className="flex items-center justify-between gap-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.24em] text-white/65">
                                        Profile
                                    </p>
                                    <h2 className="mt-2 text-2xl font-semibold">
                                        Full Stack Developer
                                    </h2>
                                </div>
                                {avatar ? (
                                    <img
                                        src={avatar}
                                        alt={profile.name}
                                        className="h-14 w-14 rounded-2xl object-cover"
                                    />
                                ) : (
                                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/10 text-2xl font-semibold">
                                        {profile.avatarInitials}
                                    </div>
                                )}
                            </div>
                            <p className="mt-5 max-w-md text-sm leading-6 text-white/80">
                                {profile.summary}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
                    <div className="rounded-[1.4rem] border border-[#d8ccc6] bg-white p-5 shadow-sm">
                        <div className="flex items-center gap-2">
                            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#330d26] text-white">
                                <LayoutGrid size={16} />
                            </div>
                            <h2 className="text-lg font-semibold">Skills</h2>
                        </div>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {skills.map((skill) => {
                                const Icon = skillIconFor(skill);

                                return (
                                    <div
                                        key={`${skill.category}-${skill.name}`}
                                        className="flex items-center gap-3 rounded-2xl border border-[#e4d8d2] bg-[#faf7f5] px-4 py-3"
                                    >
                                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#330d26] text-white">
                                            <Icon size={16} />
                                        </span>
                                        <div>
                                            <div className="text-sm font-semibold text-[#2f2230]">
                                                {skill.name}
                                            </div>
                                            <div className="text-xs text-[#846c7c]">
                                                {skill.category} • {skill.level}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <section className="rounded-[1.4rem] border border-[#d8ccc6] bg-white p-5 shadow-sm">
                            <h2 className="text-lg font-semibold">
                                Experience
                            </h2>
                            <div className="mt-5 space-y-4">
                                {aboutData.experience.map((item, index) => (
                                    <article
                                        key={`${item.role}-${index}`}
                                        className="relative pl-6"
                                    >
                                        <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-[#E95420] shadow-[0_0_0_6px_rgba(233,84,32,0.14)]" />
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                            <h3 className="text-base font-semibold text-[#2c1f29]">
                                                {item.role}
                                            </h3>
                                            <span className="text-sm text-[#7b6570]">
                                                {item.company}
                                            </span>
                                            <span className="rounded-full bg-[#f3ebe7] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b7280]">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm leading-6 text-[#4a3944]">
                                            {item.summary}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section className="rounded-[1.4rem] border border-[#d8ccc6] bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-2">
                                <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#330d26] text-white">
                                    <GraduationCap size={16} />
                                </div>
                                <h2 className="text-lg font-semibold">
                                    Education
                                </h2>
                            </div>
                            <div className="mt-5 space-y-4">
                                {aboutData.education.map((item, index) => (
                                    <article
                                        key={`${item.school}-${index}`}
                                        className="rounded-2xl border border-[#e4d8d2] bg-[#faf7f5] p-4"
                                    >
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                                            <h3 className="text-sm font-semibold text-[#2c1f29]">
                                                {item.school}
                                            </h3>
                                            <span className="text-sm text-[#7b6570]">
                                                {item.credential}
                                            </span>
                                            <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8b7280]">
                                                {item.period}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-sm leading-6 text-[#4a3944]">
                                            {item.summary}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </section>
                    </div>
                </section>

                <section className="rounded-[1.4rem] border border-[#d8ccc6] bg-white p-5 shadow-sm">
                    <div className="flex items-center gap-2">
                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#330d26] text-white">
                            <ExternalLink size={16} />
                        </div>
                        <h2 className="text-lg font-semibold">Links</h2>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-3">
                        {profile.socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target={
                                    social.href.startsWith("http")
                                        ? "_blank"
                                        : undefined
                                }
                                rel="noreferrer"
                                className="flex items-center justify-between rounded-2xl border border-[#e4d8d2] bg-[#faf7f5] px-4 py-3 text-sm transition hover:border-[#E95420] hover:text-[#C33F13]"
                            >
                                <span>{social.value}</span>
                                <ExternalLink size={15} />
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
