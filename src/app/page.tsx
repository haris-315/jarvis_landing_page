import { HeroSection } from '@/components/home/hero-section';
import { FeaturesSection } from '@/components/home/features-section';
import { HowItWorksSection } from '@/components/home/how-it-works-section';
import { StatsSection } from '@/components/home/stats-section';
import { SecuritySection } from '@/components/home/security-section';
import { AboutSection } from '@/components/home/about-section';
import { ContactSection } from '@/components/home/contact-section';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <StatsSection />
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <SecuritySection />
    </div>
  );
}
