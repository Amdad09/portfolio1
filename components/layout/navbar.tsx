'use client';

import { useEffect, useState } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { profile } from '@/lib/data/portfolio';
import { cn } from '@/lib/utils';
import { Github, Linkedin } from '../icons/brand-icons';

const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Journey', href: '#journey' },
    { label: 'Contact', href: '#contact' },
];

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) =>
            e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 w-full border-b border-transparent transition-colors',
                scrolled &&
                    'border-border/70 bg-background/80 backdrop-blur-md',
            )}
        >
            <nav
                aria-label="Primary"
                className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
            >
                <a
                    href="#top"
                    className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight"
                    aria-label={`${profile.name} — home`}
                >
                    <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-card text-primary">
                        {profile.initials}
                    </span>
                    <span className="hidden text-foreground sm:inline">
                        {profile.name}
                    </span>
                </a>

                <ul className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-2 md:flex">
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub profile"
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Github className="h-4 w-4" aria-hidden />
                    </a>
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn profile"
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Linkedin className="h-4 w-4" aria-hidden />
                    </a>
                    {profile.resumePath && (
                        <a
                            href={profile.resumePath}
                            className="ml-1 inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm transition-colors hover:border-primary/50 hover:text-primary"
                        >
                            <FileText className="h-3.5 w-3.5" aria-hidden />
                            Resume
                        </a>
                    )}
                </div>

                <button
                    type="button"
                    className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </button>
            </nav>

            {open && (
                <div
                    id="mobile-menu"
                    className="border-t border-border/70 bg-background md:hidden"
                >
                    <ul className="mx-auto max-w-6xl space-y-1 px-4 py-3 sm:px-6">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li className="flex items-center gap-2 pt-2">
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md p-2.5 text-muted-foreground hover:text-foreground"
                                aria-label="GitHub profile"
                            >
                                <Github className="h-4 w-4" aria-hidden />
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-md p-2.5 text-muted-foreground hover:text-foreground"
                                aria-label="LinkedIn profile"
                            >
                                <Linkedin className="h-4 w-4" aria-hidden />
                            </a>
                            {profile.resumePath && (
                                <a
                                    href={profile.resumePath}
                                    className="ml-auto inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm"
                                >
                                    <FileText
                                        className="h-3.5 w-3.5"
                                        aria-hidden
                                    />
                                    Resume
                                </a>
                            )}
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
