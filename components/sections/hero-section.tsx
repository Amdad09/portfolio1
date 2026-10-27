import { ArrowRight } from 'lucide-react';
import { profile } from '@/lib/data/portfolio';
import { Github, Linkedin } from '../icons/brand-icons';
export function HeroSection() {
    return (
        <section id="top" className="relative overflow-hidden">
            <div
                className="bg-grid pointer-events-none absolute inset-0 opacity-60"
                aria-hidden
            />

            <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-28">
                <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                        <span
                            className="h-1.5 w-1.5 rounded-full bg-primary"
                            aria-hidden
                        />
                        {profile.availability}
                    </div>

                    <p className="mb-3 font-mono text-sm text-primary">
                        {profile.name}
                    </p>

                    <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                        {profile.headline}
                    </h1>

                    <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
                        {profile.subheadline}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            Explore Projects
                            <ArrowRight
                                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                aria-hidden
                            />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="mt-8 flex items-center gap-4 text-muted-foreground">
                        <a
                            href={profile.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-foreground"
                        >
                            <Github className="h-4 w-4" aria-hidden /> GitHub
                        </a>
                        <span className="h-3 w-px bg-border" aria-hidden />
                        <a
                            href={profile.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-foreground"
                        >
                            <Linkedin className="h-4 w-4" aria-hidden />{' '}
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Code-inspired visual */}
                <div className="relative">
                    <div className="rounded-xl border border-border bg-card/70 p-1 shadow-2xl shadow-black/40">
                        <div className="flex items-center gap-1.5 px-3 py-2">
                            <span
                                className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30"
                                aria-hidden
                            />
                            <span
                                className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30"
                                aria-hidden
                            />
                            <span
                                className="h-2.5 w-2.5 rounded-full bg-primary/60"
                                aria-hidden
                            />
                            <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                                profile.ts
                            </span>
                        </div>
                        <pre className="overflow-x-auto rounded-lg bg-background/60 p-4 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
                            <code>
                                <span className="text-muted-foreground">
                                    {'// who I am'}
                                </span>
                                {'\n'}
                                <span className="text-primary">const</span>{' '}
                                <span className="text-foreground">
                                    developer
                                </span>{' '}
                                <span className="text-muted-foreground">=</span>{' '}
                                <span className="text-foreground">{'{'}</span>
                                {'\n  '}
                                <span className="text-foreground">name</span>
                                <span className="text-muted-foreground">
                                    :
                                </span>{' '}
                                <span className="text-primary">
                                    &quot;Amdadul Haque&quot;
                                </span>
                                <span className="text-muted-foreground">,</span>
                                {'\n  '}
                                <span className="text-foreground">focus</span>
                                <span className="text-muted-foreground">
                                    :
                                </span>{' '}
                                <span className="text-primary">
                                    [&quot;frontend&quot;, &quot;backend&quot;]
                                </span>
                                <span className="text-muted-foreground">,</span>
                                {'\n  '}
                                <span className="text-foreground">stack</span>
                                <span className="text-muted-foreground">
                                    :
                                </span>{' '}
                                <span className="text-primary">
                                    [&quot;react&quot;, &quot;next&quot;,
                                    &quot;ts&quot;]
                                </span>
                                <span className="text-muted-foreground">,</span>
                                {'\n  '}
                                <span className="text-foreground">goal</span>
                                <span className="text-muted-foreground">
                                    :
                                </span>{' '}
                                <span className="text-primary">
                                    &quot;software engineer&quot;
                                </span>
                                <span className="text-muted-foreground">,</span>
                                {'\n'}
                                <span className="text-foreground">{'}'}</span>
                                <span className="text-muted-foreground">;</span>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
}
