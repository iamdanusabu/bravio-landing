import styles from './FAQ.module.css';

export default function FAQ() {
    const faqs = [
        {
            q: "What is Bravio?",
            a: "Bravio is the only unified platform that combines Field Service Management (FSM), Customer Relationship Management (CRM), and a Computerized Maintenance Management System (CMMS). Designed specifically for biomedical ISOs, we streamline everything from asset tracking and PM scheduling to customer contracts and technician dispatching."
        },
        {
            q: "Does Bravio support ISO 13485 and FDA compliance?",
            a: "Yes. Our software is built to ensure compliance with ISO 13485 standards, FDA 21 CFR Part 11, and AAMI EQ56 requirements. It automatically logs digital signatures, maintains an audit trail of all service events, and generates compliance-ready reports for healthcare facility audits."
        },
        {
            q: "Can I automate medical device PM schedules?",
            a: "Absolutely. Bravio functions as a specialized CMMS (Computerized Maintenance Management System) that automates PM scheduling based on device risk levels and manufacturer recommendations. You'll strictly meet AEM (Alternative Equipment Maintenance) program requirements without manual spreadsheet tracking."
        },
        {
            q: "Is this HTM software mobile-friendly for field technicians?",
            a: "Bravio provides a native mobile experience for Healthcare Technology Management (HTM) professionals. Technicians can access work orders, view service manuals, manage inventory, and capture customer compliance signatures directly from their iOS or Android devices, even offline."
        },
        {
            q: "How does Bravio improve 'Agentic' workflows?",
            a: "Our system is AI-ready, structuring your service data to be accessible by authorized agents and AI copilots. This 'Agentic Engine Optimization' allows for natural language queries like 'Show me all ventilators due for service next week' to be answered instantly, future-proofing your operations."
        },
        {
            q: "Do you offer data migration for legacy CMMS systems?",
            a: "Yes, we specialize in high-fidelity data migration. We can import asset histories, customer databases, and service logs from legacy systems like spreadsheets, older CMMS, or generic FSM tools, ensuring zero data loss during your transition."
        }
    ];

    // FAQ Schema for SEO/AEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.a
            }
        }))
    };

    return (
        <section id="faq" className={styles.section}>
            <div className={styles.container}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <h2 className={styles.headline}>Frequently Asked Questions (FSM & Compliance)</h2>
                <div className={styles.list}>
                    {faqs.map((faq, i) => (
                        <div key={i} className={styles.item}>
                            <h3 className={styles.question}>{faq.q}</h3>
                            <p className={styles.answer}>{faq.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
