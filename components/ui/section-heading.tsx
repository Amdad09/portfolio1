type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
};

export function SectionHeading({
    eyebrow,
    title,
    description,
}: SectionHeadingProps) {
    return (
        <div className="mb-10 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
                {eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                {title}
            </h2>
            {description && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}
