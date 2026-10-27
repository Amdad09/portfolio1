import { Mail } from 'lucide-react';
import { profile } from '@/lib/data/portfolio';
import { Github, Linkedin } from '../icons/brand-icons';
export function ContactSection() {
    return (
        <section
            id="contact"
            className="scroll-mt-20 border-t border-border/60"
        >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card/50 p-8 sm:p-12">
                    <div
                        className="bg-grid pointer-events-none absolute inset-0 opacity-40"
                        aria-hidden
                    />
                    <div className="relative max-w-2xl">
                        <p className="font-mono text-xs uppercase tracking-widest text-primary">
                            Contact
                        </p>
                        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                            Let&apos;s build something worth reviewing.
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                            I&apos;m {profile.availability.toLowerCase()}. If
                            you&apos;re hiring, collaborating, or just want to
                            talk about frontend and full-stack development, my
                            inbox is open.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a
                                href={`mailto:${profile.email}`}
                                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                                <Mail className="h-4 w-4" aria-hidden />
                                Email me
                            </a>
                            <a
                                href={profile.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                            >
                                <Github className="h-4 w-4" aria-hidden />
                                GitHub
                            </a>
                            <a
                                href={profile.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                            >
                                <Linkedin className="h-4 w-4" aria-hidden />
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
