import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VossSection from '@/components/VossSection';
import CompetitionSection from '@/components/CompetitionSection';
import OffersSection from '@/components/OffersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Index() {
  return (
    <div className="min-h-screen bg-vse-bg">
      <Header />
      <Hero />
      <VossSection />
      <CompetitionSection />
      <OffersSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
