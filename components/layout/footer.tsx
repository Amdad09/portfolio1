'use client';

import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { profile } from '@/lib/data/portfolio';

export function Footer() {
    // Start as null so SSR and the initial client render match exactly.
    // The real year is filled in after mount, avoiding hydration mismatches
    // and Next.js 15's "dynamic API" prerender error for `new Date()`.
    const [year, setYear] = useState<number | null>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="border-t border-border/60">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 py-8 sm:flex-row sm:items-center sm:px-6">
                <div>
                    <p className="text-sm font-medium text-foreground">
                        {profile.name}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                        {profile.tagline}
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <FaGithub className="h-4 w-4" aria-hidden />
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <FaLinkedin className="h-4 w-4" aria-hidden />
                    </a>
                    <span className="text-xs text-muted-foreground">
                        © {year ?? ''}
                    </span>
                </div>
            </div>
        </footer>
    );
}
