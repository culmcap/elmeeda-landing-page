import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import CombinedFeaturedSection from '@/components/ui/combined-featured-section';
import Integrations from '@/components/Integrations';
import AIAgents from '@/components/AIAgents';
import ROICalculator from '@/components/ROICalculator';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[2000px] mx-auto">
        <Navigation />
        <Hero />
        <CombinedFeaturedSection />
        <AIAgents />
        <Integrations />
        <ROICalculator />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
