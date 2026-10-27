
export const profile = {
    name: 'Amdadul Haque',
    initials: 'AH',
    title: 'Frontend Developer · Aspiring Full-Stack Engineer',
    headline: 'Building Today, Scaling Tomorrow.',
    subheadline:
        'Frontend developer building modern web experiences with React and Next.js, and growing into full-stack software engineering through practical, well-architected projects.',
    shortBio:
        "I build interfaces with React, Next.js, and TypeScript, and I'm steadily building backend skills with Node.js, Express, and MongoDB. I care about clean code, solid fundamentals, and projects that actually work.",
    // [REPLACE] — use a real email you monitor
    email: 'amdadulhaque601671@gmail.com', // [REPLACE]
    // [REPLACE] — real GitHub profile URL
    github: 'https://github.com/Amdad09', // [REPLACE]
    // [REPLACE] — real LinkedIn profile URL
    linkedin: 'https://www.linkedin.com/in/Amdad09', // [REPLACE]
    // Leave null until a real resume PDF exists in /public
    youtube: 'https://www.youtube.com/@amdadul_09',
    resumePath: null as string | null, // e.g. "/amdadul-haque-resume.pdf"
    availability: 'Open to frontend roles and full-stack opportunities',
    tagline: 'Building reliable software, one honest project at a time.',
};

export type SkillCategory = {
    title: string;
    description: string;
    items: string[];
};

export const skills: SkillCategory[] = [
    {
        title: 'Frontend',
        description: 'Interfaces, component architecture, and responsive UI.',
        items: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Tailwind CSS',
            'shadcn/ui',
        ],
    },
    {
        title: 'Backend',
        description: 'APIs, routing, and request/response handling.',
        items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
    },
    {
        title: 'Database',
        description: 'Persistence and data modeling fundamentals.',
        items: ['MongoDB', 'MongoDB Driver', 'CRUD operations'],
    },
    {
        title: 'Tools & Workflow',
        description: 'Day-to-day engineering tooling.',
        items: ['Git', 'GitHub', 'npm', 'Environment variables', 'ES Modules'],
    },
];

export type Project = {
    slug: string;
    name: string;
    summary: string;
    description: string;
    tech: string[];
    features: string[];
    challenge: string;
    approach: string;
    repoUrl: string | null;
    liveUrl: string | null;
    image: string | null; // path under /public/projects
    isPlaceholder: boolean;
};

// ─────────────────────────────────────────────────────────────
// PROJECTS — these are PLACEHOLDERS.
// Replace with your real projects and set isPlaceholder: false.
// Do not leave isPlaceholder: true in production if you want
// recruiters to see real work.
// ─────────────────────────────────────────────────────────────
export const projects: Project[] = [
    {
        slug: 'project-one',
        name: 'Bazar-dor — RESTful CRUD API', // [REPLACE]
        summary:
            'A REST API with create, read, update, and delete endpoints, built to practice routing, validation, and MongoDB integration.',
        description:
            'A focused backend project demonstrating REST conventions, request validation, and database operations with the MongoDB driver. Structured for clarity and easy extension.',
        tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
        features: [
            'CRUD endpoints following REST conventions',
            'Input validation and structured error responses',
            'Environment-based configuration',
        ],
        challenge:
            'Keeping route handlers small and readable while validation and error handling grew across endpoints.',
        approach:
            "Extracted shared validation and error-handling middleware, kept controllers thin, and documented each endpoint's contract.",
        repoUrl: 'https://github.com/Amdad09/bazar-dor', // [REPLACE] real repo URL
        liveUrl: 'https://bazar-dor-web-gamma.vercel.app', // [REPLACE] real demo URL or leave null
        image: 'https://images.unsplash.com/photo-1611693424421-3db00de93a89',
        isPlaceholder: true,
    },
    {
        slug: 'project-two',
        name: 'My Newspaper — Auth Application', // [REPLACE]
        summary:
            'An authentication flow with registration, login, protected routes, and session handling.',
        description:
            'A full authentication exercise covering password hashing, token or session strategy, and protected client and server routes. Built to understand auth end-to-end rather than copy a tutorial.',
        tech: [
            'Next.js',
            'TypeScript',
            'Express.js',
            'MongoDB',
            'Authentication',
        ],
        features: [
            'Registration and login with validation',
            'Protected routes and guarded API endpoints',
            'Secure password handling',
        ],
        challenge:
            'Coordinating client-side route protection with server-side authorization without duplicating logic.',
        approach:
            'Centralized auth checks in middleware, kept the client aware only of session state, and enforced authorization at the API boundary.',
        repoUrl: 'https://github.com/Amdad09/my-newspaper',
        liveUrl: 'https://my-newspaper-pu6i.vercel.app',
        image: 'https://images.unsplash.com/photo-1689421755395-c18b8cd24db3',
        isPlaceholder: true,
    },
    {
        slug: 'project-three',
        name: 'Project Three — Management Dashboard', // [REPLACE]
        summary:
            'A data-driven dashboard with tables, filters, and a clean component system for managing records.',
        description:
            'A frontend-heavy project exploring component composition, data fetching patterns, and responsive table layouts with shadcn/ui and Tailwind.',
        tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
        features: [
            'Reusable data table with sorting and filtering',
            'Responsive layout across mobile and desktop',
            'Consistent design system built on shadcn/ui',
        ],
        challenge:
            'Building a table that stayed usable on small screens without hiding essential data.',
        approach:
            'Designed a mobile card view as a first-class layout rather than a fallback, and reused the same data hooks across both views.',
        repoUrl: 'https://github.com/Amdad09/fit-log',
        liveUrl: 'https://fit-log-ruby.vercel.app/',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?',
        isPlaceholder: true,
    },
];

export type JourneyStep = {
    index: string;
    title: string;
    description: string;
};

export const journey: JourneyStep[] = [
    {
        index: '01',
        title: 'Build',
        description:
            'Develop practical frontend and backend applications that solve real, if small, problems — and finish them.',
    },
    {
        index: '02',
        title: 'Understand',
        description:
            'Strengthen knowledge of APIs, databases, runtime environments, and how applications fit together end to end.',
    },
    {
        index: '03',
        title: 'Improve',
        description:
            'Sharpen problem-solving, code quality, and engineering judgment through review, refactoring, and repetition.',
    },
];
