import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import FeaturesGrid from '@/components/FeaturesGrid';
import StatsSection from '@/components/StatsSection';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import Pricing from '@/components/Pricing';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <FeaturesGrid />
      <StatsSection />
      <HowItWorks />
      <Reviews />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}
