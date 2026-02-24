import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'FAQ — Biomedical FSM Software Questions Answered',
    description:
        'All your questions about Bravio answered. Covers ISO 13485 compliance, CMMS features, PM automation, HTM mobile app, data migration, and pricing for biomedical service teams.',
    alternates: {
        canonical: 'https://hellobravio.com/faq',
    },
    openGraph: {
        type: 'website',
        url: 'https://hellobravio.com/faq',
        title: 'FAQ — Bravio Biomedical FSM Software',
        description:
            'Common questions about Bravio: ISO compliance, PM automation, mobile app, CMMS features, pricing, and data migration for biomedical ISO teams.',
        images: [
            {
                url: '/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Bravio FAQ — Biomedical FSM Software',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ — Bravio Biomedical FSM Software',
        description:
            'ISO 13485, PM automation, mobile HTM, CMMS — all your Bravio questions answered.',
        images: ['/opengraph-image.png'],
    },
};

export default function FAQPage() {
    return (
        <main aria-label="Bravio FAQ — Frequently Asked Questions">
            <Navbar />
            <div style={{ paddingTop: '80px' }}>
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
