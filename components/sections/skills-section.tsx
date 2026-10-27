import { skills } from '@/lib/data/portfolio';
import { SectionHeading } from '@/components/ui/section-heading';

export function SkillsSection() {
    return (
        <section id="skills" className="scroll-mt-20 border-t border-border/60">
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
                <SectionHeading
                    eyebrow="Skills"
                    title="Technologies I work with"
                    description="Tools and technologies I have hands-on experience with — not a wishlist."
                />

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {skills.map((category) => (
                        <div
                            key={category.title}
                            className="group rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40"
                        >
                            <h3 className="text-sm font-medium text-foreground">
                                {category.title}
                            </h3>
                            <p className="mt-1 text-xs text-muted-foreground">
                                {category.description}
                            </p>
                            <ul className="mt-4 flex flex-wrap gap-1.5">
                                {category.items.map((item) => (
                                    <li
                                        key={item}
                                        className="rounded-md border border-border/80 bg-background/60 px-2 py-1 font-mono text-[11px] text-muted-foreground"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
