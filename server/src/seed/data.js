    export const profile = {
        username: "marvelade",
        name: "Marvel Ade",
        title: "Full-stack Developer",
        location: "Lagos, Nigeria",
        email: "marveladedewuyi@gmail.com",
        avatarInitials: "MA",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        avatarUrl:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
        bio: "I build polished web experiences with React, Node, accessible UI systems, and practical product thinking.",
        summary:
            "A developer portfolio wrapped in an Ubuntu 22.04 desktop, built for scanning projects, opening apps, and sending messages from one focused workspace.",
        socials: [
            {
                label: "GitHub",
                value: "github.com/marvelade7",
                href: "https://www.github.com/marvelade7",
            },
            {
                label: "LinkedIn",
                value: "linkedin.com/in/marvellous-adewuyi-a32070278",
                href: "https://www.linkedin.com/in/marvellous-adewuyi-a32070278/",
            },
            {
                label: "Email",
                value: "marveladedewuyi@gmail.com",
                href: "mailto:marveladedewuyi@gmail.com",
            },
        ],
        stats: [
            { label: "Experience", value: "2+ yrs" },
            { label: "Projects", value: "18" },
            { label: "Focus", value: "Web apps" },
        ],
        experience: [
            {
                role: "Software Engineer",
                company: "Full-Stack Web Development",
                period: "Present",
                summary:
                    "Experienced in building modern web applications using React, TypeScript, Node.js, Express.js, and Python. Passionate about creating responsive, user-focused applications with clean code and intuitive user experiences.",
            },
        ],
        education: [
            {
                school: "Ladoke Akintola University of Technology",
                credential: "B.Sc. Computer Science",
                period: "Currently pursuing",
                summary:
                    "Currently pursuing a Bachelor's degree in Computer Science with a strong foundation in data structures, algorithms, computer architecture, and software development.",
            },
        ],
    };

    export const skills = [
        {
            group: "Frontend",
            items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
        },
        {
            group: "Backend",
            items: ["Node.js", "Express.js", "MongoDB", "GraphQL"],
        },
        {
            group: "Tools",
            items: ["TypeScript", "JavaScript", "Git", "GitHub", "Linux"],
        },
    ];

    export const skillItems = [
        { name: "React", icon: "react", level: "Advanced", category: "Frontend" },
        {
            name: "Next.js",
            icon: "layers3",
            level: "Advanced",
            category: "Frontend",
        },
        {
            name: "Tailwind CSS",
            icon: "palette",
            level: "Advanced",
            category: "Frontend",
        },
        {
            name: "Bootstrap",
            icon: "palette",
            level: "Advanced",
            category: "Frontend",
        },
        { name: "Node.js", icon: "server", level: "Advanced", category: "Backend" },
        {
            name: "Express.js",
            icon: "route",
            level: "Advanced",
            category: "Backend",
        },
        {
            name: "MongoDB",
            icon: "database",
            level: "Advanced",
            category: "Backend",
        },
        { name: "GraphQL", icon: "server", level: "Advanced", category: "Backend" },
        {
            name: "TypeScript",
            icon: "badge-check",
            level: "Advanced",
            category: "Tools",
        },
        {
            name: "JavaScript",
            icon: "terminal",
            level: "Advanced",
            category: "Tools",
        },
        { name: "Git", icon: "git-branch", level: "Advanced", category: "Tools" },
        {
            name: "GitHub",
            icon: "git-branch",
            level: "Advanced",
            category: "Tools",
        },
        { name: "Linux", icon: "terminal", level: "Advanced", category: "Tools" },
    ];

    export const projects = [
        {
            title: "EventFlow",
            slug: "eventflow",
            category: "Full Stack",
            status: "Completed",
            description:
                "A full-stack event management and ticket booking platform that enables organizers to create and manage events, while allowing attendees to book tickets and receive secure QR code passes for event check-in.",
            impact: "Simplified event management with secure online ticketing and QR check-in.",
            techStack: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Cloudinary",
                "Nodemailer",
                "HTML5 QR Code",
            ],
            repo: "https://github.com/marvelade7/EventFlow",
            demo: "https://marvel-event-flow.vercel.app",
            thumbnail:
                "https://res.cloudinary.com/dqnwdpjrl/image/upload/v1783427043/Screenshot_From_2026-07-07_13-22-20_uzjx2p.png",
        },
        {
            title: "Kernel Notes",
            slug: "kernel-notes",
            type: "Developer Tool",
            category: "React + Tailwind",
            status: "In Progress",
            createdDate: "2026-02-12",
            thumbnail: "",
            description:
                "A Markdown knowledge base with local-first editing, command palette actions, and encrypted sync.",
            stack: ["React", "IndexedDB", "Node.js"],
            techStack: ["React", "IndexedDB", "Node.js"],
            impact: "Designed for sub-100ms document switching.",
            repo: "https://www.github.com/marvelade7",
            github: "https://www.github.com/marvelade7",
            demo: "https://example.com",
        },
        {
            title: "Nigerian Foods App",
            slug: "nigerian-foods-app",
            category: "Frontend",
            status: "Completed",
            description:
                "A responsive web application that helps users discover Nigerian dishes through search, filtering, and detailed meal information fetched from a food API.",
            impact: "Made discovering Nigerian cuisine simple and interactive.",
            techStack: [
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "Bootstrap Icons",
                "Iconify",
                "REST API",
                "Vercel",
            ],
            repo: "https://github.com/marvelade7/Nigerian-Foods",
            demo: "https://nigerian-foods.vercel.app/",
            thumbnail:
                "https://res.cloudinary.com/dqnwdpjrl/image/upload/v1783429676/Screenshot_From_2026-07-07_14-07-21_dz16nj.png",
        },
        {
            title: "ThinkTest",
            slug: "thinktest",
            category: "Frontend",
            status: "Completed",
            description:
                "A responsive quiz application that allows users to answer multiple-choice questions, navigate freely between them, review responses, and receive instant scores with personalized feedback.",
            impact: "Delivered an engaging and interactive quiz experience.",
            techStack: [
                "React",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "Flowbite React",
            ],
            repo: "https://github.com/marvelade7/ThinkTest",
            demo: "https://think-test-rho.vercel.app",
            thumbnail:
                "https://res.cloudinary.com/dqnwdpjrl/image/upload/v1783430175/Screenshot_From_2026-07-07_14-15-49_xshwnm.png",
        },
        {
            title: "VerseIQ",
            slug: "verseiq",
            category: "Full Stack",
            status: "Completed",
            description:
                "A full-stack Bible quiz platform that enables users to test their Scripture knowledge through timed quizzes, track their progress, compete on a leaderboard, and review detailed quiz history from a personalized dashboard.",
            impact: "Made Bible learning engaging through gamified quizzes and progress tracking.",
            techStack: [
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
                "Express.js",
                "MongoDB",
            ],
            repo: "https://github.com/marvelade7/VerseIQ-Client",
            demo: "https://verse-iq.vercel.app",
            thumbnail:
                "https://res.cloudinary.com/dqnwdpjrl/image/upload/v1783430611/Screenshot_From_2026-07-07_14-23-11_i2ma3y.png",
        },
        {
            title: "VerseIQ Server",
            slug: "verseiq-server",
            category: "Backend",
            status: "Completed",
            description:
                "A RESTful backend API that powers the VerseIQ platform with user authentication, quiz session management, question delivery, leaderboard ranking, profile management, and secure data persistence.",
            impact: "Provided a secure and scalable API for the VerseIQ platform.",
            techStack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Render"],
            repo: "https://github.com/marvelade7/VerseIQ-Server",
            demo: "https://verseiq-server.onrender.com",
        },
        {
            title: "Adebissy's Pastries",
            slug: "adebissys-pastries",
            category: "Frontend",
            status: "Completed",
            description:
                "A responsive bakery storefront that showcases featured pastries, brand information, and enables customers to place orders seamlessly through WhatsApp and other social platforms.",
            impact: "Improved customer engagement with a modern online storefront.",
            techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
            repo: "https://github.com/marvelade7/Adebissy-Pastries",
            demo: "https://adebissy-pastries.vercel.app",
            thumbnail:
                "https://res.cloudinary.com/dqnwdpjrl/image/upload/v1783431014/Screenshot_From_2026-07-07_14-29-49_yqbbcf.png",
        },
        {
            title: "EventFlow Backend",
            slug: "eventflow-backend",
            category: "Backend",
            status: "Completed",
            description:
                "A RESTful backend for an event management and ticket booking platform, providing secure authentication, event management, ticket booking, QR code verification, payment simulation, email notifications, and organizer analytics.",
            impact: "Powered secure event management and QR-based ticket verification.",
            techStack: [
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "Cloudinary",
                "Nodemailer",
                "Multer",
                "Render",
            ],
            repo: "https://github.com/marvelade7/EventFlow-Backend",
            demo: "https://eventflow-backend-fwv4.onrender.com",
        },
    ];
