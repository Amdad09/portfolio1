import { journey } from '@/lib/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function JourneySection() {
    return (
        <section
            id="journey"
            className="scroll-mt-20 border-t border-border/60"
        >
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
                <SectionHeading
                    eyebrow="Journey"
                    title="How I'm developing as an engineer"
                    description="A direction, not a résumé — the principles guiding how I grow."
                />

                <ol className="grid gap-4 md:grid-cols-3">
                    {journey.map((step) => (
                        <li
                            key={step.index}
                            className="relative rounded-xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/40"
                        >
                            <span className="font-mono text-3xl font-semibold text-primary/30">
                                {step.index}
                            </span>
                            <h3 className="mt-3 text-base font-medium text-foreground">
                                {step.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {step.description}
                            </p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
