import { ExternalLink, AlertCircle } from 'lucide-react';
import { projects, type Project } from '@/lib/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';
import { Github } from '../icons/brand-icons';

function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card/50 transition-colors hover:border-primary/40">
            <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-background/60">
                {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                        src={project.image}
                        alt={`${project.name} screenshot`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                ) : (
                    <div
                        className="flex h-full w-full items-center justify-center bg-grid"
                        aria-hidden
                    >
                        <span className="font-mono text-xs text-muted-foreground/70">
                            {project.isPlaceholder
                                ? 'Screenshot placeholder'
                                : 'Preview'}
                        </span>
                    </div>
                )}
                {project.isPlaceholder && (
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-md border border-amber-500/30 bg-amber-500/10 px-2 py-1 text-[11px] text-amber-400">
                        <AlertCircle className="h-3 w-3" aria-hidden />
                        Placeholder project
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-medium text-foreground">
                    {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                </p>

                <div className="mt-4">
                    <h4 className="font-mono text-[11px] uppercase tracking-widest text-primary">
                        Features
                    </h4>
                    <ul className="mt-2 space-y-1.5">
                        {project.features.map((feature) => (
                            <li
                                key={feature}
                                className="flex gap-2 text-xs text-muted-foreground"
                            >
                                <span
                                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70"
                                    aria-hidden
                                />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-4 rounded-lg border border-border/70 bg-background/40 p-3">
                    <p className="text-xs leading-relaxed text-muted-foreground">
                        <span className="font-medium text-foreground">
                            Challenge:{' '}
                        </span>
                        {project.challenge}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        <span className="font-medium text-foreground">
                            Approach:{' '}
                        </span>
                        {project.approach}
                    </p>
                </div>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <li
                            key={t}
                            className="rounded-md border border-border/80 bg-background/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                        >
                            {t}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex items-center gap-3 pt-5">
                    {project.repoUrl ? (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <Github className="h-4 w-4" aria-hidden />{' '}
                            Repository
                        </a>
                    ) : (
                        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/50">
                            <Github className="h-4 w-4" aria-hidden /> Repo
                            coming soon
                        </span>
                    )}
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                            <ExternalLink className="h-4 w-4" aria-hidden />{' '}
                            Live demo
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    );
}

export function ProjectsSection() {
    return (
        <section
            id="projects"
            className="scroll-mt-20 border-t border-border/60"
        >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
                <SectionHeading
                    eyebrow="Projects"
                    title="Featured work"
                    description="Projects built to develop specific skills — with the technical challenges and approaches made explicit."
                />

                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>

                <p className="mt-6 text-xs text-muted-foreground">
                    Projects marked as placeholders are not completed work and
                    must be replaced before deployment.
                </p>
            </div>
        </section>
    );
}
