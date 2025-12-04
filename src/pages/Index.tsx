import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { HennaSection, DrawingSection, PhotographySection } from '@/components/WorkSection';
import { YouTubeSection } from '@/components/YouTubeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HennaSection />
      <DrawingSection />
      <PhotographySection />
      <YouTubeSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
