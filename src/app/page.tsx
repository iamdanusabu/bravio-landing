import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Pricing from '@/components/Pricing';
import FeaturesSlider from '@/components/FeaturesSlider';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <FeaturesSlider />
      <Reviews />
      <Pricing />
      <section style={{ padding: '100px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 48, fontWeight: 600, marginBottom: 20 }}>Replace operational chaos with clarity.</h2>
          <p style={{ fontSize: 20, color: '#666', marginBottom: 40 }}>Simple setup. No heavy customization required.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button className="btn btn-primary" style={{ padding: '16px 32px' }}>Start Free Trial</button>
            <button className="btn" style={{ border: '1px solid #ddd', padding: '16px 32px' }}>Book a Demo</button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
