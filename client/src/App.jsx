import { useState } from "react";
import Desktop from "./components/Desktop.jsx";
import LockScreen from "./components/LockScreen.jsx";

export default function App() {
    const [locked, setLocked] = useState(true);
    const [unlocking, setUnlocking] = useState(false);

    function unlock() {
        if (unlocking) return;
        setUnlocking(true);
        window.setTimeout(() => setLocked(false), 850);
    }

    return (
        <main className="h-screen w-screen overflow-hidden bg-ubuntu-aubergine font-ubuntu text-white">
            {(!locked || unlocking) && <Desktop />}
            {locked && <LockScreen unlocking={unlocking} onUnlock={unlock} />}
        </main>
    );
}
