import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import MetricsBar from '@/components/MetricsBar';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import HowItWorks from '@/components/HowItWorks';
import Integrations from '@/components/Integrations';
import CompanyCredibility from '@/components/CompanyCredibility';
import ROICalculator from '@/components/ROICalculator';
import VINChecker from '@/components/VINChecker';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <MetricsBar />
      <Problem />
      <Solution />
      <HowItWorks />
      <Integrations />
      <CompanyCredibility />
      <ROICalculator />
      <VINChecker />
      <FinalCTA />
      <Footer />
    </main>
  );
}
