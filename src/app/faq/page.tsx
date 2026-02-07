import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function FAQPage() {
    return (
        <main>
            <Navbar />
            <div style={{ paddingTop: '80px' }}> {/* Add padding to account for fixed navbar */}
                <FAQ />
                <Pricing />
                <section style={{ padding: '100px 0', textAlign: 'center' }}>
                    <div className="container">
                        <h2 style={{ fontSize: 48, fontWeight: 600, marginBottom: 20 }}>Ready to streamline your operations?</h2>
                        <p style={{ fontSize: 20, color: '#666', marginBottom: 40 }}>Join hundreds of biomed ISOs using Bravio.</p>
                        <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                            <button className="btn btn-primary" style={{ padding: '16px 32px' }}>Start Free Trial</button>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </main>
    );
}
