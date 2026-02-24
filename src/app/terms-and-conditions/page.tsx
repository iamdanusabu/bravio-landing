import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Terms & Conditions — Bravio',
    description: 'Terms & Conditions for Bravio',
};

export default function TermsAndConditionsPage() {
    return (
        <main aria-label="Bravio Terms and Conditions">
            <Navbar />
            <div style={{ paddingTop: '120px', paddingBottom: '100px' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '40px', marginBottom: '16px' }}>Terms &amp; Conditions for Bravio Biomed</h1>
                    <p style={{ color: 'var(--muted)', marginBottom: '40px' }}><strong>Effective Date:</strong> February 24, 2026</p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        By accessing or using the <strong>Bravio Biomed</strong> Software-as-a-Service (SaaS) platform (&quot;Service&quot;), your organization (&quot;Customer&quot; or &quot;Tenant&quot;) agrees to be bound by these Terms and Conditions. If you do not agree to these terms, do not use the Service.
                    </p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>2. Description of Service</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        Bravio Biomed provides a cloud-based application designed to help clinical engineering teams and biomedical service companies manage their operations. The Service includes features for:
                    </p>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: 1.6 }}>
                        <li style={{ marginBottom: '8px' }}>Asset tracking and inventory management.</li>
                        <li style={{ marginBottom: '8px' }}>Work order creation, assignment, and tracking.</li>
                        <li style={{ marginBottom: '8px' }}>Preventive Maintenance (PM) scheduling.</li>
                        <li style={{ marginBottom: '8px' }}>Generation of Service Reports, Estimates, and Invoices.</li>
                        <li style={{ marginBottom: '8px' }}>Automated communication (Email and SMS) with facilities regarding service events.</li>
                    </ul>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>3. Account Security and Tenant Isolation</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        The Service utilizes a multi-tenant architecture. Customers are responsible for managing access to their specific Tenant environment.
                    </p>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: 1.6 }}>
                        <li style={{ marginBottom: '8px' }}><strong>User Management:</strong> You are solely responsible for creating, managing, and revoking access for your Technicians, Administrators, and staff.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Security:</strong> You agree to safeguard your authentication credentials. Bravio Biomed is not liable for data breaches resulting from compromised passwords or unauthorized access granted by the Customer.</li>
                    </ul>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>4. Limitation of Liability for Medical Devices &amp; Compliance</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        <strong>Bravio Biomed is not a healthcare provider and does not provide medical or clinical advice.</strong> The Service is strictly an operational tracking and management tool.
                    </p>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: 1.6 }}>
                        <li style={{ marginBottom: '8px' }}><strong>Device Safety:</strong> The software records maintenance actions, but Bravio Biomed makes no warranty or guarantee regarding the actual safety, efficacy, calibration, or operational status of any medical devices and equipment managed within the platform.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Technician Responsibility:</strong> The Customer is solely responsible for ensuring that its technicians possess the necessary certifications, skills, and specialties to perform work on complex medical equipment.</li>
                        <li style={{ marginBottom: '8px' }}><strong>Regulatory Compliance:</strong> It is the Customer&apos;s responsibility to ensure that their use of the Service, and the resulting documentation (Service Reports), complies with all applicable local, national, and international healthcare regulations (e.g., FDA, HIPAA, Joint Commission standards).</li>
                    </ul>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>5. Acceptable Use</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        Customers agree not to:
                    </p>
                    <ul style={{ paddingLeft: '24px', marginBottom: '16px', lineHeight: 1.6 }}>
                        <li style={{ marginBottom: '8px' }}>Use the Service to store or transmit malicious code, viruses, or illegal material.</li>
                        <li style={{ marginBottom: '8px' }}>Attempt to gain unauthorized access to the underlying infrastructure or data belonging to other Tenants.</li>
                        <li style={{ marginBottom: '8px' }}>Send unsolicited communications (spam) using the built-in Resend or Twilio integrations.</li>
                    </ul>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>6. Service Availability and Updates</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        We strive to maintain high availability of the Service. However, Bravio Biomed does not guarantee completely uninterrupted or error-free operation. We reserve the right to deploy updates, bug fixes, and feature changes to the Service at any time.
                    </p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>7. Intellectual Property</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        The Service, including its code, design, features, and functionality, is owned by Bravio Biomed and is protected by intellectual property laws. Customers retain all rights to the data they input into the system (Tenant Data).
                    </p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>8. Termination</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        Bravio Biomed reserves the right to suspend or terminate a Customer&apos;s access to the Service for violation of these Terms or non-payment of subscription fees. Customers may terminate their use of the Service by providing written notice according to their specific subscription agreement.
                    </p>

                    <h2 style={{ fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>9. Contact Information</h2>
                    <p style={{ marginBottom: '16px', lineHeight: 1.6 }}>
                        For questions regarding these Terms and Conditions, please contact <a href="mailto:legal@hellobravio.com" style={{ textDecoration: 'underline' }}>legal@hellobravio.com</a>.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
