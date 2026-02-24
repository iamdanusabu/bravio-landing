import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Privacy Policy — Bravio Biomed',
    description: 'Privacy Policy for Bravio Biomed',
};

export default function PrivacyPolicyPage() {
    return (
        <main aria-label="Bravio Privacy Policy">
            <Navbar />
            <div style={{ paddingTop: '120px', paddingBottom: '100px' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '40px', marginBottom: '16px' }}>Privacy Policy for Bravio Biomed</h1>
                    <p style={{ color: 'var(--muted)', marginBottom: '40px' }}><strong>Effective Date:</strong> February 24, 2026</p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>1. Introduction</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        Welcome to <strong>Bravio Biomed</strong>. We provide a specialized B2B Software-as-a-Service (SaaS) platform tailored for clinical engineering and biomedical professionals. Our software enables organizations to manage medical equipment directories (Assets), track preventive maintenance (PM) schedules, assign and process Work Orders, generate Service Reports, and manage associated financial documents like Estimates and Invoices.
                    </p>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        This Privacy Policy explains how we collect, process, and protect business and personal information when you access or use our platform.
                    </p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>2. Information We Collect</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        Because Bravio Biomed is a multi-tenant enterprise application, we collect information on behalf of our enterprise customers (&quot;Tenants&quot;).
                    </p>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: 1.6 }}>
                        <li style={{ marginBottom: '8px' }}><strong>Account Information:</strong> Names, email addresses, roles (e.g., Technician, Administrator), and secure authentication credentials.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Facility &amp; Customer Data:</strong> Names, phone numbers, and physical addresses of the clinics and hospitals (Facilities) you service.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Asset Data:</strong> Details about medical equipment, including models, serial numbers, maintenance history, and specific locations.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Operational Data:</strong> Work order notes, technician assignments, time tracking (Labor), inventory usage (Parts), and financial data contained in estimates and invoices.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Communication Records:</strong> We track system-generated notifications (such as Emails and SMS) sent from the platform to Customer facilities regarding scheduling and service updates.</li>
                    </ul>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>3. How We Use Your Information</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        We use the collected data strictly to provide and improve the Bravio Biomed platform:
                    </p>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: 1.6 }}>
                        <li style={{ marginBottom: '8px' }}><strong>Service Delivery:</strong> To facilitate asset management, schedule maintenance, and track work orders across your facilities.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Communication:</strong> To dispatch automated, transactional SMS and Email notifications (via third-party integrations) regarding upcoming or completed service events.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Reporting &amp; Analytics:</strong> To generate service reports (PDFs), calculate technician performance metrics, and track workload distribution within your Tenant.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Support &amp; Security:</strong> To provide customer support, detect security incidents, and ensure the platform is functioning correctly.</li>
                    </ul>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>4. Data Isolation and Security</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        Your data is securely segregated. Bravio Biomed employs strict multi-tenant architecture techniques to ensure that Data, Work Orders, Assets, and Customer records belonging to one Tenant cannot be accessed by another Tenant. We use modern security protocols and encryption to protect your data in transit and at rest.
                    </p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>5. Third-Party Service Providers</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        We may share necessary data with trusted third-party infrastructure providers to deliver our services. This includes:
                    </p>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: 1.6 }}>
                        <li style={{ marginBottom: '8px' }}><strong>Resend:</strong> For dispatching system emails and service reports.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Twilio:</strong> For delivering SMS notifications regarding scheduled service.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Hosting &amp; Database Providers:</strong> To securely host the application and its databases.</li>
                    </ul>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        These providers are bound by strict confidentiality and data protection agreements and are only permitted to use the data to perform the specific services we contract them for.
                    </p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>6. Access and Control</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        Tenant Administrators have the ability to manage, correct, or delete user accounts (Technicians), Facilities, and Assets within their specific environment. If a user wishes to exercise individual data subject rights (such as access or deletion), they should directly contact their organization&apos;s Tenant Administrator.
                    </p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>7. Changes to this Policy</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        We may update this Privacy Policy from time to time. When we make material changes, we will notify your Tenant Administrators via email or through an application notification.
                    </p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>8. Contact Us</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        If you have questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:legal@hellobravio.com" style={{ textDecoration: 'underline' }}>legal@hellobravio.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
