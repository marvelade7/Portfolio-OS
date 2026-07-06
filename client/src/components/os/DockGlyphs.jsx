const stroke = "currentColor";

function BaseSvg({ children, className = "", viewBox = "0 0 48 48" }) {
    return (
        <svg
            viewBox={viewBox}
            fill="none"
            className={className}
            aria-hidden="true"
        >
            {children}
        </svg>
    );
}

export function TerminalGlyph({ className = "" }) {
    return (
        <BaseSvg className={className}>
            <rect
                x="8"
                y="10"
                width="32"
                height="24"
                rx="4"
                stroke={stroke}
                strokeWidth="2.4"
            />
            <path
                d="M13 17L18 22L13 27"
                stroke={stroke}
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M21 27H31"
                stroke={stroke}
                strokeWidth="2.6"
                strokeLinecap="round"
            />
            <rect
                x="13"
                y="31"
                width="10"
                height="2.4"
                rx="1.2"
                fill={stroke}
            />
        </BaseSvg>
    );
}

export function WebGlyph({ className = "" }) {
    return (
        <BaseSvg className={className}>
            <circle cx="24" cy="24" r="13" stroke={stroke} strokeWidth="2.4" />
            <ellipse
                cx="24"
                cy="24"
                rx="6"
                ry="13"
                stroke={stroke}
                strokeWidth="1.9"
            />
            <ellipse
                cx="24"
                cy="24"
                rx="13"
                ry="6"
                stroke={stroke}
                strokeWidth="1.9"
            />
            <path
                d="M11 24H37"
                stroke={stroke}
                strokeWidth="1.9"
                strokeLinecap="round"
            />
            <path
                d="M24 11C27 14.5 28.8 19 28.8 24C28.8 29 27 33.5 24 37"
                stroke={stroke}
                strokeWidth="1.9"
                strokeLinecap="round"
            />
            <path
                d="M24 11C21 14.5 19.2 19 19.2 24C19.2 29 21 33.5 24 37"
                stroke={stroke}
                strokeWidth="1.9"
                strokeLinecap="round"
            />
        </BaseSvg>
    );
}

export function ContactGlyph({ className = "" }) {
    return (
        <BaseSvg className={className}>
            <rect
                x="9"
                y="12"
                width="30"
                height="24"
                rx="4"
                stroke={stroke}
                strokeWidth="2.4"
            />
            <path
                d="M11 15L24 25L37 15"
                stroke={stroke}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M11 33L18.5 26.5"
                stroke={stroke}
                strokeWidth="2.4"
                strokeLinecap="round"
            />
            <path
                d="M37 33L29.5 26.5"
                stroke={stroke}
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        </BaseSvg>
    );
}

export function ProjectsGlyph({ className = "" }) {
    return (
        <BaseSvg className={className}>
            <path
                d="M12 16H36L39 20V34H9V20L12 16Z"
                stroke={stroke}
                strokeWidth="2.4"
                strokeLinejoin="round"
            />
            <path
                d="M19 16V13H29V16"
                stroke={stroke}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17 25H31"
                stroke={stroke}
                strokeWidth="2.4"
                strokeLinecap="round"
            />
            <path
                d="M24 19V31"
                stroke={stroke}
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        </BaseSvg>
    );
}

export function AddGlyph({ className = "" }) {
    return (
        <BaseSvg className={className}>
            <circle cx="24" cy="24" r="14" stroke={stroke} strokeWidth="2.4" />
            <path
                d="M24 16V32"
                stroke={stroke}
                strokeWidth="2.8"
                strokeLinecap="round"
            />
            <path
                d="M16 24H32"
                stroke={stroke}
                strokeWidth="2.8"
                strokeLinecap="round"
            />
        </BaseSvg>
    );
}

export function LauncherGlyph({ className = "" }) {
    return (
        <BaseSvg className={className}>
            <rect x="10" y="10" width="8" height="8" rx="2" fill={stroke} />
            <rect x="20" y="10" width="8" height="8" rx="2" fill={stroke} />
            <rect x="30" y="10" width="8" height="8" rx="2" fill={stroke} />
            <rect x="10" y="20" width="8" height="8" rx="2" fill={stroke} />
            <rect x="20" y="20" width="8" height="8" rx="2" fill={stroke} />
            <rect x="30" y="20" width="8" height="8" rx="2" fill={stroke} />
            <rect x="10" y="30" width="8" height="8" rx="2" fill={stroke} />
            <rect x="20" y="30" width="8" height="8" rx="2" fill={stroke} />
            <rect x="30" y="30" width="8" height="8" rx="2" fill={stroke} />
        </BaseSvg>
    );
}
