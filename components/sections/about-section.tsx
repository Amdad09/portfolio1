import { profile } from '@/lib/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function AboutSection() {
    return (
        <section id="about" className="scroll-mt-20 border-t border-border/60">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
                <SectionHeading
                    eyebrow="About"
                    title="Developer focused on fundamentals"
                    description="A short, honest snapshot of where I am and where I'm heading."
                />

                <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
                    <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                        <p>
                            I&apos;m a frontend developer working primarily with
                            React, Next.js, and TypeScript. I enjoy building
                            interfaces that are clean, responsive, and easy to
                            use — and I take the time to structure components so
                            they stay maintainable as a project grows.
                        </p>
                        <p>
                            My current focus is strengthening the backend side
                            of my skill set: building RESTful APIs with Node.js
                            and Express, working with MongoDB, and implementing
                            authentication and protected routes. I learn best by
                            building projects end to end and then improving
                            them.
                        </p>
                        <p>
                            I care about clean code, solid JavaScript and
                            TypeScript fundamentals, and solving problems
                            properly rather than patching around them. My
                            long-term goal is to become a strong software
                            engineer who can build reliable, scalable, and
                            maintainable software.
                        </p>
                    </div>

                    <div className="rounded-xl border border-border bg-card/50 p-6">
                        <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
                            Currently
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                            <li className="flex gap-3">
                                <span
                                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                                    aria-hidden
                                />
                                Building full-stack projects with React,
                                Next.js, and Express
                            </li>
                            <li className="flex gap-3">
                                <span
                                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                                    aria-hidden
                                />
                                Studying API design, databases, and application
                                architecture
                            </li>
                            <li className="flex gap-3">
                                <span
                                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                                    aria-hidden
                                />
                                Improving problem-solving and code quality
                                through practice
                            </li>
                            <li className="flex gap-3">
                                <span
                                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                                    aria-hidden
                                />
                                {profile.availability}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
