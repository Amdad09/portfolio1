import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { JourneySection } from '@/components/sections/journey-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
    return (
        <>
            <a
                href="#top"
                className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-60 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
            >
                Skip to content
            </a>
            <Navbar />
            <main id="main">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <JourneySection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
}
