import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useClock } from "../hooks/useClock.js";
import wallpaper from "../assets/ubuntu-wallpaper.png";
import profilePic from "../assets/profilePro.png";

export default function LockScreen({ unlocking, onUnlock }) {
    const { time, seconds, date } = useClock();
    const [password, setPassword] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        function handleKeyDown(event) {
            if (unlocking) return;
            if (event.key === "Enter") {
                onUnlock();
                return;
            }
            if (event.key.length === 1) {
                inputRef.current?.focus();
            }
        }

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onUnlock, unlocking]);

    function handleSubmit(event) {
        event.preventDefault();
        onUnlock(password);
    }

    return (
        <section
            className={`fixed inset-0 z-50 transition-all duration-200 ${
                unlocking
                    ? "pointer-events-none scale-[1.02] opacity-0 blur-xl"
                    : "scale-100 opacity-100 blur-0"
            }`}
        >
            <img
                src={wallpaper}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-105 object-cover blur-sm"
            />
            <div className="absolute inset-0 bg-ubuntu-aubergine/60 backdrop-blur-md" />
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
                <div className="flex flex-col items-center transition-all duration-200">
                    <img
                        src={profilePic}
                        alt="Profile"
                        className="mb-6 h-28 w-28 rounded-full border border-white/20 object-cover shadow-ubuntu transition-all duration-200"
                    />
                    <div className="text-xl font-medium">marvelade</div>
                    <div className="mt-6 flex items-end gap-2">
                        <div className="text-7xl font-light leading-none sm:text-8xl">
                            {time}
                        </div>
                        <div className="mb-2 text-2xl text-white/75">
                            {seconds}
                        </div>
                    </div>
                    <div className="mt-3 text-lg text-white/85">{date}</div>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 flex h-12 w-full max-w-sm items-center overflow-hidden rounded-md border border-white/20 bg-black/25 shadow-ubuntu backdrop-blur-xl transition-all duration-200"
                    >
                        <input
                            ref={inputRef}
                            type="password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            className="h-full min-w-0 flex-1 bg-transparent px-4 text-base text-white outline-none placeholder:text-white/45"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="current-password"
                        />
                        <button
                            type="submit"
                            className="grid h-12 w-12 place-items-center border-l border-white/15 bg-white/10 text-white transition-all duration-200 hover:bg-ubuntu-orange focus:bg-ubuntu-orange focus:outline-none"
                            aria-label="Unlock"
                            title="Unlock"
                        >
                            <ArrowRight size={20} strokeWidth={2.3} />
                        </button>
                    </form>
                </div>
            </div>

            <div className="absolute bottom-7 left-0 right-0 z-10 text-center text-sm text-white/60">
                Press any key
            </div>
        </section>
    );
}
