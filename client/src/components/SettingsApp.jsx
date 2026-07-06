import {
    Github,
    Linkedin,
    Mail,
    MonitorCog,
    Palette,
    Twitter,
    UserRound,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { sendContactMessage } from "../lib/api.js";

const WALLPAPER_STORAGE_KEY = "ubuntu-wallpaper-color";
const PROFILE_STORAGE_KEY = "ubuntu-profile-avatar-url";
const DEFAULT_WALLPAPER = "#330d26";

const navItems = [
    { id: "profile", label: "Profile", icon: UserRound },
    { id: "contact", label: "Contact", icon: Mail },
    { id: "social", label: "Social Links", icon: Github },
    { id: "theme", label: "Theme", icon: Palette },
];

export default function SettingsApp({
    portfolio,
    wallpaperColor,
    onWallpaperColorChange,
}) {
    const [activePanel, setActivePanel] = useState("profile");
    const [avatarUrl, setAvatarUrl] = useState("");
    const [profileStatus, setProfileStatus] = useState("");
    const [contactForm, setContactForm] = useState({
        name: portfolio.profile.name,
        email: portfolio.profile.email,
        subject: "Ubuntu portfolio inquiry",
        message: "",
    });
    const [contactState, setContactState] = useState({
        status: "idle",
        feedback: "",
    });

    useEffect(() => {
        const savedAvatar =
            window.localStorage.getItem(PROFILE_STORAGE_KEY) ||
            portfolio.profile.avatar ||
            portfolio.profile.avatarUrl ||
            "";
        setAvatarUrl(savedAvatar);
    }, [portfolio.profile.avatar, portfolio.profile.avatarUrl]);

    const socialLinks = useMemo(() => {
        const socials = portfolio.profile.socials || [];
        const github = socials.find((item) => item.label === "GitHub");
        const linkedin = socials.find((item) => item.label === "LinkedIn");
        const twitter = socials.find((item) => item.label === "Twitter");

        return [
            {
                label: "GitHub",
                value: github?.value || "github.com/marvelade7",
                href: github?.href || "https://www.github.com/marvelade7",
                icon: Github,
            },
            {
                label: "LinkedIn",
                value:
                    linkedin?.value ||
                    "linkedin.com/in/marvellous-adewuyi-a32070278",
                href:
                    linkedin?.href ||
                    "https://www.linkedin.com/in/marvellous-adewuyi-a32070278/",
                icon: Linkedin,
            },
            {
                label: "Twitter",
                value: twitter?.value || "x.com/marvelade",
                href: twitter?.href || "https://x.com/marvelade",
                icon: Twitter,
            },
        ];
    }, [portfolio.profile.socials]);

    function saveAvatarUrl() {
        window.localStorage.setItem(PROFILE_STORAGE_KEY, avatarUrl.trim());
        setProfileStatus("Avatar URL saved locally.");
        window.setTimeout(() => setProfileStatus(""), 2500);
    }

    async function handleContactSubmit(event) {
        event.preventDefault();
        setContactState({ status: "sending", feedback: "" });

        try {
            const result = await sendContactMessage({
                ...contactForm,
                source: "ubuntu-settings",
            });

            if (result.ok) {
                setContactState({
                    status: "sent",
                    feedback: result.message || "Message saved.",
                });
                setContactForm({
                    name: portfolio.profile.name,
                    email: portfolio.profile.email,
                    subject: "Ubuntu portfolio inquiry",
                    message: "",
                });
                return;
            }

            setContactState({
                status: "error",
                feedback: result.message || "Message could not be sent.",
            });
        } catch (error) {
            setContactState({
                status: "error",
                feedback: error.message || "Message could not be sent.",
            });
        }
    }

    function updateContactField(field, value) {
        setContactForm((current) => ({ ...current, [field]: value }));
    }

    const safeWallpaperColor = wallpaperColor || DEFAULT_WALLPAPER;

    return (
        <div className="h-full overflow-hidden bg-[#ece7e3] text-[#241922]">
            <div className="flex h-full">
                <aside className="w-60 shrink-0 border-r border-black/10 bg-[#f7f3f0] p-4">
                    <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-sm">
                        <div className="grid h-11 w-11 place-items-center rounded-xl bg-[#330d26] text-white">
                            <MonitorCog size={20} />
                        </div>
                        <div>
                            <h1 className="text-lg font-semibold leading-tight">
                                Settings
                            </h1>
                            <p className="text-xs uppercase tracking-[0.22em] text-[#8b7481]">
                                Ubuntu panel
                            </p>
                        </div>
                    </div>

                    <nav className="mt-4 space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = activePanel === item.id;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActivePanel(item.id)}
                                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition ${
                                        active
                                            ? "bg-[#330d26] text-white shadow-sm"
                                            : "text-[#4a3945] hover:bg-white hover:text-[#330d26]"
                                    }`}
                                >
                                    <Icon
                                        size={16}
                                        className={
                                            active
                                                ? "text-white"
                                                : "text-[#7e6874]"
                                        }
                                    />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </aside>

                <main className="min-w-0 flex-1 overflow-auto p-5">
                    {activePanel === "profile" && (
                        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                            <div className="rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#330d26] text-white">
                                        <UserRound size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            Profile
                                        </h2>
                                        <p className="text-sm text-[#7a6772]">
                                            Name, role, and avatar URL
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 flex items-start gap-4 rounded-3xl border border-[#e4d8d2] bg-[#faf7f5] p-4">
                                    {avatarUrl ? (
                                        <img
                                            src={avatarUrl}
                                            alt={portfolio.profile.name}
                                            className="h-20 w-20 rounded-2xl object-cover"
                                            onError={() => setAvatarUrl("")}
                                        />
                                    ) : (
                                        <div className="grid h-20 w-20 place-items-center rounded-2xl bg-[#330d26] text-2xl font-semibold text-white">
                                            {portfolio.profile.avatarInitials}
                                        </div>
                                    )}

                                    <div className="min-w-0 flex-1">
                                        <p className="text-lg font-semibold text-[#2f2230]">
                                            {portfolio.profile.name}
                                        </p>
                                        <p className="text-sm text-[#6f5a66]">
                                            {portfolio.profile.title}
                                        </p>
                                        <p className="mt-1 text-sm text-[#84717c]">
                                            {portfolio.profile.location}
                                        </p>
                                    </div>
                                </div>

                                <label className="mt-5 block text-sm font-semibold text-[#2f2230]">
                                    Avatar URL
                                    <input
                                        value={avatarUrl}
                                        onChange={(event) =>
                                            setAvatarUrl(event.target.value)
                                        }
                                        placeholder="https://..."
                                        className="mt-2 h-11 w-full rounded-xl border border-[#d9ccc6] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20"
                                    />
                                </label>

                                <div className="mt-4 flex flex-wrap items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={saveAvatarUrl}
                                        className="inline-flex h-10 items-center rounded-xl bg-[#E95420] px-4 text-sm font-semibold text-white transition hover:bg-[#d84a19]"
                                    >
                                        Save Avatar URL
                                    </button>
                                    {profileStatus && (
                                        <p className="text-sm text-[#0b7551]">
                                            {profileStatus}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm">
                                <h3 className="text-lg font-semibold">About</h3>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#433440]">
                                    {portfolio.profile.bio}
                                </p>
                                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#66545f]">
                                    {portfolio.profile.summary}
                                </p>
                            </div>
                        </section>
                    )}

                    {activePanel === "contact" && (
                        <section className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
                            <aside className="rounded-[1.5rem] border border-[#d7cbc6] bg-[#330d26] p-5 text-white shadow-sm">
                                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                                    <Mail size={21} />
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold">
                                    Contact
                                </h2>
                                <p className="mt-3 text-sm leading-6 text-white/78">
                                    Send a message from the desktop and store it
                                    in the API database.
                                </p>
                                <a
                                    href={`mailto:${portfolio.profile.email}`}
                                    className="mt-5 inline-flex h-10 items-center rounded-xl bg-white px-4 text-sm font-semibold text-[#330d26] transition hover:bg-[#f0e8e2]"
                                >
                                    {portfolio.profile.email}
                                </a>
                            </aside>

                            <form
                                onSubmit={handleContactSubmit}
                                className="rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm"
                            >
                                <div className="grid gap-4 md:grid-cols-2">
                                    <label className="block text-sm font-semibold text-[#2f2230]">
                                        Name
                                        <input
                                            value={contactForm.name}
                                            onChange={(event) =>
                                                updateContactField(
                                                    "name",
                                                    event.target.value,
                                                )
                                            }
                                            required
                                            className="mt-2 h-11 w-full rounded-xl border border-[#d9ccc6] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20"
                                        />
                                    </label>
                                    <label className="block text-sm font-semibold text-[#2f2230]">
                                        Email
                                        <input
                                            type="email"
                                            value={contactForm.email}
                                            onChange={(event) =>
                                                updateContactField(
                                                    "email",
                                                    event.target.value,
                                                )
                                            }
                                            required
                                            className="mt-2 h-11 w-full rounded-xl border border-[#d9ccc6] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20"
                                        />
                                    </label>
                                </div>

                                <label className="mt-4 block text-sm font-semibold text-[#2f2230]">
                                    Subject
                                    <input
                                        value={contactForm.subject}
                                        onChange={(event) =>
                                            updateContactField(
                                                "subject",
                                                event.target.value,
                                            )
                                        }
                                        className="mt-2 h-11 w-full rounded-xl border border-[#d9ccc6] bg-white px-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20"
                                    />
                                </label>

                                <label className="mt-4 block text-sm font-semibold text-[#2f2230]">
                                    Message
                                    <textarea
                                        value={contactForm.message}
                                        onChange={(event) =>
                                            updateContactField(
                                                "message",
                                                event.target.value,
                                            )
                                        }
                                        required
                                        rows={7}
                                        className="mt-2 w-full resize-none rounded-xl border border-[#d9ccc6] bg-white px-3 py-3 text-sm outline-none transition focus:border-[#E95420] focus:ring-2 focus:ring-[#E95420]/20"
                                    />
                                </label>

                                <div className="mt-4 flex flex-wrap items-center gap-3">
                                    <button
                                        type="submit"
                                        disabled={
                                            contactState.status === "sending"
                                        }
                                        className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#E95420] px-4 text-sm font-semibold text-white transition hover:bg-[#d84a19] disabled:cursor-wait disabled:bg-[#b96a4f]"
                                    >
                                        <Mail size={16} />
                                        {contactState.status === "sending"
                                            ? "Sending"
                                            : "Send Message"}
                                    </button>
                                    {contactState.feedback && (
                                        <p
                                            className={`text-sm ${contactState.status === "error" ? "text-red-700" : "text-[#0b7551]"}`}
                                        >
                                            {contactState.feedback}
                                        </p>
                                    )}
                                </div>
                            </form>
                        </section>
                    )}

                    {activePanel === "social" && (
                        <section className="rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-3">
                                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#330d26] text-white">
                                    <Github size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">
                                        Social Links
                                    </h2>
                                    <p className="text-sm text-[#7a6772]">
                                        Clickable rows with external links
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-3 md:grid-cols-3">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center justify-between rounded-2xl border border-[#e4d8d2] bg-[#faf7f5] px-4 py-4 transition hover:border-[#E95420] hover:text-[#C33F13]"
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#330d26] text-white">
                                                    <Icon size={16} />
                                                </span>
                                                <span>
                                                    <span className="block text-sm font-semibold text-[#2f2230]">
                                                        {social.label}
                                                    </span>
                                                    <span className="block text-xs text-[#84717c]">
                                                        {social.value}
                                                    </span>
                                                </span>
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        </section>
                    )}

                    {activePanel === "theme" && (
                        <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
                            <div className="rounded-[1.5rem] border border-[#d7cbc6] bg-white p-5 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#330d26] text-white">
                                        <Palette size={20} />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            Theme
                                        </h2>
                                        <p className="text-sm text-[#7a6772]">
                                            Wallpaper color updates live
                                        </p>
                                    </div>
                                </div>

                                <label className="mt-5 block text-sm font-semibold text-[#2f2230]">
                                    Wallpaper color
                                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#d9ccc6] bg-[#faf7f5] p-3">
                                        <input
                                            type="color"
                                            value={safeWallpaperColor}
                                            onChange={(event) =>
                                                onWallpaperColorChange(
                                                    event.target.value,
                                                )
                                            }
                                            className="h-12 w-14 rounded-lg border border-black/10 bg-transparent p-1"
                                        />
                                        <div className="min-w-0 flex-1">
                                            <p className="text-sm font-semibold text-[#2f2230]">
                                                Desktop background
                                            </p>
                                            <p className="text-xs text-[#84717c]">
                                                Saved in localStorage and
                                                applied immediately.
                                            </p>
                                        </div>
                                    </div>
                                </label>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        "#330d26",
                                        "#2c001e",
                                        "#4a1d3a",
                                        "#5b2d47",
                                        "#1f1c2c",
                                    ].map((color) => (
                                        <button
                                            key={color}
                                            type="button"
                                            onClick={() =>
                                                onWallpaperColorChange(color)
                                            }
                                            className="h-11 w-11 rounded-xl border border-black/10 shadow-sm"
                                            style={{ backgroundColor: color }}
                                            aria-label={`Set wallpaper color to ${color}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div
                                className="rounded-[1.5rem] border border-[#d7cbc6] p-5 shadow-sm"
                                style={{
                                    background: `linear-gradient(135deg, ${safeWallpaperColor}, ${safeWallpaperColor}cc 60%, #1a1018)`,
                                    color: "white",
                                }}
                            >
                                <h3 className="text-lg font-semibold">
                                    Preview
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-white/82">
                                    The desktop wallpaper uses the selected
                                    color instantly and keeps the setting after
                                    refresh.
                                </p>
                                <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                                    <div className="flex items-center justify-between text-sm">
                                        <span>Wallpaper</span>
                                        <span className="font-mono">
                                            {safeWallpaperColor.toUpperCase()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
}
