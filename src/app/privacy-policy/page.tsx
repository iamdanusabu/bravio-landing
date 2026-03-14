import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: 'Privacy Policy — Bravio Biomed',
    description: 'Privacy Policy for Bravio Biomed FSM. Describes how we collect, use, store, and disclose information. Effective February 24, 2026.',
};

const sectionStyle: React.CSSProperties = { marginTop: '48px' };
const h2Style: React.CSSProperties = { fontSize: '22px', fontWeight: 700, marginBottom: '12px', marginTop: '32px' };
const pStyle: React.CSSProperties = { marginBottom: '16px', lineHeight: 1.75, color: 'var(--muted)' };
const ulStyle: React.CSSProperties = { paddingLeft: '24px', marginBottom: '16px', lineHeight: 1.75, color: 'var(--muted)' };
const liStyle: React.CSSProperties = { marginBottom: '8px' };
const alertStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '8px',
    padding: '16px 20px',
    marginBottom: '16px',
    lineHeight: 1.75,
    color: 'var(--muted)',
    fontSize: '14px',
};

export default function PrivacyPolicyPage() {
    return (
        <main aria-label="Bravio Privacy Policy">
            <Navbar />
            <div style={{ paddingTop: '120px', paddingBottom: '100px' }}>
                <div className="container" style={{ maxWidth: '820px', margin: '0 auto' }}>

                    <h1 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '12px' }}>Privacy Policy</h1>
                    <p style={{ color: 'var(--muted)', marginBottom: '8px', fontSize: '15px' }}>Bravio Biomed</p>
                    <p style={{ color: 'var(--muted)', marginBottom: '40px', fontSize: '15px' }}><strong>Effective Date:</strong> February 24, 2026</p>

                    <div style={alertStyle}>
                        THIS PRIVACY POLICY DESCRIBES HOW BRAVIO BIOMED (&quot;BRAVIO,&quot; &quot;WE,&quot; &quot;US,&quot; OR &quot;OUR&quot;) COLLECTS, USES, STORES, AND DISCLOSES INFORMATION IN CONNECTION WITH THE BRAVIO FSM PLATFORM. BY USING THE SERVICE, YOU CONSENT TO THE PRACTICES DESCRIBED HEREIN.
                    </div>

                    {/* Section 1 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>1. Introduction and Scope</h2>
                        <p style={pStyle}>Bravio provides a specialized Business-to-Business (B2B) Software-as-a-Service platform for clinical engineering and biomedical service organizations (&quot;Tenants&quot;). This Privacy Policy applies to all information collected through the Service, including information inputted by Tenant administrators, technicians, and other authorized users.</p>
                        <p style={pStyle}>This Policy does not apply to the practices of third-party services that may be integrated with or linked from the Platform. Each third-party service has its own privacy policy, and we encourage you to review those policies separately.</p>
                    </div>

                    {/* Section 2 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>2. Information We Collect</h2>
                        <p style={pStyle}><strong>2.1 Account and Registration Information</strong><br />When a Tenant registers for the Service, we collect: organization name, administrator name and email address, billing information, and account credentials.</p>
                        <p style={pStyle}><strong>2.2 User Information</strong><br />For users operating within a Tenant&apos;s account, we collect: full name, email address, role (e.g., Technician, Administrator), and profile information.</p>
                        <p style={pStyle}><strong>2.3 Operational and Business Data</strong><br />In the course of using the Service, Tenants and their Users input and generate: facility names, addresses, and contact information; asset details including equipment models, serial numbers, and service histories; work order notes, technician assignments, labor records, and parts usage; service reports, estimates, and invoices; preventive maintenance schedules; and automated notification logs (SMS and email records).</p>
                        <p style={pStyle}><strong>2.4 Google Account Data</strong><br />When a User connects a Google account for authentication or Google Calendar synchronization, we receive: the User&apos;s Google email address, basic profile information (name and profile picture), and access to the User&apos;s primary Google Calendar (read and write permissions for syncing work orders).</p>
                        <p style={pStyle}><strong>2.5 Technical and Usage Data</strong><br />We automatically collect certain technical data when you access the Service, including: IP addresses, browser type and version, device identifiers, operating system, pages visited, features used, and timestamps. This data is used for security monitoring, platform improvement, and troubleshooting.</p>
                        <p style={pStyle}><strong>2.6 Communications</strong><br />We retain records of automated communications dispatched through the Platform (e.g., SMS and email notifications sent to facilities regarding service events) for operational and audit purposes.</p>
                    </div>

                    {/* Section 3 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>3. How We Use Your Information</h2>
                        <p style={pStyle}>We use collected information solely for the following purposes:</p>
                        <ul style={ulStyle}>
                            <li style={liStyle}><strong>Service Delivery:</strong> To provide, operate, and maintain the Platform and its features, including asset management, work order processing, scheduling, invoicing, and communications.</li>
                            <li style={liStyle}><strong>Authentication:</strong> To verify user identity and manage access to the Platform.</li>
                            <li style={liStyle}><strong>Google Calendar Sync:</strong> To synchronize work orders with Users&apos; Google Calendars where that feature is enabled.</li>
                            <li style={liStyle}><strong>Automated Notifications:</strong> To dispatch transactional SMS and email notifications via our third-party providers on behalf of Tenants.</li>
                            <li style={liStyle}><strong>Security and Fraud Prevention:</strong> To monitor for suspicious activity, protect against unauthorized access, and maintain the integrity of the Platform.</li>
                            <li style={liStyle}><strong>Platform Improvement:</strong> To analyze aggregated, anonymized usage patterns to improve features and user experience. We do not use individual Tenant Data for this purpose without de-identification.</li>
                            <li style={liStyle}><strong>Customer Support:</strong> To respond to support requests and resolve technical issues.</li>
                            <li style={liStyle}><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, court orders, or legal processes.</li>
                        </ul>
                        <p style={pStyle}>We do not use your data for advertising, marketing to third parties, or any purpose not listed above. <strong>We do not sell your data. Ever.</strong></p>
                    </div>

                    {/* Section 4 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>4. Google API Data — Limited Use Disclosure</h2>
                        <p style={pStyle}>Bravio FSM&apos;s access to and use of information received from Google APIs strictly adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Google API Services User Data Policy</a>, including its Limited Use requirements. Specifically:</p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>We use Google account data (email, profile) solely to manage user authentication and account identity within the Platform.</li>
                            <li style={liStyle}>We use Google Calendar access solely to synchronize Bravio work orders with the User&apos;s primary Google Calendar.</li>
                            <li style={liStyle}>We do not share, transfer, sell, or disclose Google user data to any third party, except to our hosting infrastructure providers (Vercel and Supabase) solely as necessary to operate the Platform.</li>
                            <li style={liStyle}>We do not use Google user data for advertising or to train machine learning models.</li>
                            <li style={liStyle}>We do not allow humans to read Google user data unless you have given us explicit permission, it is necessary for security purposes, or we are required to do so by law.</li>
                        </ul>
                    </div>

                    {/* Section 5 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>5. Data Sharing and Disclosure</h2>
                        <p style={pStyle}>We do not sell, rent, or trade your personal or business data. We may share data only in the following limited circumstances:</p>
                        <p style={pStyle}><strong>5.1 Authorized Third-Party Service Providers</strong><br />We engage trusted third-party vendors to help deliver the Service. These providers are permitted to access data only to the extent necessary to perform specific functions and are bound by confidentiality obligations. Current providers include:</p>
                        <ul style={ulStyle}>
                            <li style={liStyle}><strong>Resend</strong> — for dispatching system-generated emails and service reports.</li>
                            <li style={liStyle}><strong>Twilio</strong> — for delivering SMS notifications to facilities.</li>
                            <li style={liStyle}><strong>Vercel</strong> — for application hosting and delivery.</li>
                            <li style={liStyle}><strong>Supabase</strong> — for database hosting and storage.</li>
                        </ul>
                        <p style={pStyle}>We periodically review our service providers and will update this list as providers change. By using the Service, you consent to data being processed by these providers as necessary to deliver the Service.</p>
                        <p style={pStyle}><strong>5.2 Legal Requirements</strong><br />We may disclose your data if required to do so by law, regulation, court order, or lawful request from a government or law enforcement authority. We will make reasonable efforts to notify you of such disclosure requests where legally permissible.</p>
                        <p style={pStyle}><strong>5.3 Business Transfers</strong><br />In the event of a merger, acquisition, sale of assets, or reorganization, your data may be transferred to a successor entity. We will provide notice prior to data being transferred and becoming subject to a different privacy policy.</p>
                        <p style={pStyle}><strong>5.4 Protection of Rights</strong><br />We may disclose data where we believe in good faith that doing so is necessary to protect the rights, property, or safety of Bravio, our customers, or the public.</p>
                    </div>

                    {/* Section 6 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>6. Multi-Tenant Data Isolation</h2>
                        <p style={pStyle}>The Service uses a strict multi-tenant architecture. Each Tenant&apos;s data is logically segregated so that it cannot be accessed by any other Tenant. Bravio employs technical controls including row-level security, access control policies, and encrypted database configurations to enforce this isolation. While no system is perfectly secure, we take data isolation seriously and apply industry-standard practices to prevent cross-tenant data exposure.</p>
                    </div>

                    {/* Section 7 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>7. Data Security</h2>
                        <p style={pStyle}><strong>7.1</strong> We implement commercially reasonable administrative, technical, and physical safeguards to protect your data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit (TLS), encryption at rest, access controls, authentication protocols, and regular security monitoring.</p>
                        <div style={alertStyle}>
                            <strong>7.2 Security Limitations and Disclaimer.</strong> DESPITE OUR EFFORTS, NO METHOD OF TRANSMISSION OVER THE INTERNET OR ELECTRONIC STORAGE IS COMPLETELY SECURE. WE CANNOT AND DO NOT GUARANTEE ABSOLUTE SECURITY. IN THE EVENT OF A DATA BREACH OR SECURITY INCIDENT, BRAVIO&apos;S LIABILITY SHALL BE LIMITED AS SET FORTH IN OUR TERMS AND CONDITIONS. YOU ACKNOWLEDGE THAT YOU PROVIDE DATA TO THE SERVICE AT YOUR OWN RISK.
                        </div>
                        <p style={pStyle}><strong>7.3 Security Incident Notification.</strong> In the event of a confirmed data breach that affects your Tenant Data, we will notify you in accordance with applicable law and our security incident response procedures. Notification will be provided to the Tenant Administrator&apos;s registered email address.</p>
                    </div>

                    {/* Section 8 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>8. Data Retention</h2>
                        <p style={pStyle}><strong>8.1 Active Account Data:</strong> We retain your Tenant Data for the duration of your active Subscription, plus thirty (30) days following expiration or termination to facilitate data export.</p>
                        <p style={pStyle}><strong>8.2 Deleted Data:</strong> When you or your Tenant Administrators delete data within the Platform (e.g., individual records or assets), that data may persist in encrypted backups for up to ninety (90) days before permanent deletion.</p>
                        <p style={pStyle}><strong>8.3 Technical Logs:</strong> System access logs and audit trails may be retained for up to twelve (12) months for security and troubleshooting purposes.</p>
                        <p style={pStyle}><strong>8.4 Legal Hold:</strong> Notwithstanding the above, we may retain data for longer periods where required by law, regulation, or in connection with ongoing legal proceedings.</p>
                    </div>

                    {/* Section 9 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>9. Tenant Administrator Responsibilities</h2>
                        <p style={pStyle}>Bravio provides data management tools to Tenant Administrators, who are responsible for:</p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Managing and revoking user access within their organization.</li>
                            <li style={liStyle}>Ensuring that all data entered into the Platform is done with appropriate legal authorization.</li>
                            <li style={liStyle}>Responding to data subject access or deletion requests from individuals (e.g., facility staff or technicians) whose information is stored in the Platform.</li>
                            <li style={liStyle}>Ensuring that the organization&apos;s use of the Platform complies with applicable privacy laws, including HIPAA, GDPR, and any other applicable regulation.</li>
                        </ul>
                        <p style={pStyle}>Bravio is a data processor acting on behalf of the Tenant (data controller) with respect to personal data inputted into the Service. The Tenant bears primary responsibility for the lawfulness of data processing within the Platform.</p>
                    </div>

                    {/* Section 10 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>10. Individual Data Rights</h2>
                        <p style={pStyle}>Where applicable under laws such as GDPR or CCPA, individuals whose personal data is stored within a Tenant&apos;s environment may have rights including access, correction, deletion, and data portability. Individuals wishing to exercise these rights should contact their organization&apos;s Tenant Administrator directly. Bravio will assist Tenant Administrators in responding to such requests where technically feasible and legally required.</p>
                        <p style={pStyle}>For requests directed at Bravio directly (relating to information Bravio holds about Tenant organizations), please contact us at <a href="mailto:legal@hellobravio.com" style={{ textDecoration: 'underline' }}>legal@hellobravio.com</a>.</p>
                    </div>

                    {/* Section 11 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>11. Cookies and Tracking Technologies</h2>
                        <p style={pStyle}>The Platform may use essential cookies and similar technologies to maintain session state, authentication, and user preferences. We do not use third-party advertising cookies, behavioral tracking cookies, or tracking pixels for marketing purposes. You may configure your browser to reject cookies, but doing so may affect the functionality of the Service.</p>
                    </div>

                    {/* Section 12 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>12. Children&apos;s Privacy</h2>
                        <p style={pStyle}>The Service is not directed at or intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe that a minor&apos;s information has been entered into the Service, please contact us immediately at <a href="mailto:legal@hellobravio.com" style={{ textDecoration: 'underline' }}>legal@hellobravio.com</a> and we will take appropriate steps to remove such information.</p>
                    </div>

                    {/* Section 13 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>13. International Data Transfers</h2>
                        <p style={pStyle}>The Service is hosted and operated from infrastructure that may be located in the United States or other countries. If you access the Service from outside those jurisdictions, your data may be transferred to and processed in a country with different data protection laws than your own. By using the Service, you consent to such transfers. We implement appropriate safeguards for international transfers where required by applicable law.</p>
                    </div>

                    {/* Section 14 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>14. Limitation of Liability for Privacy Incidents</h2>
                        <div style={alertStyle}>
                            BRAVIO&apos;S LIABILITY FOR ANY PRIVACY-RELATED INCIDENT, INCLUDING DATA BREACHES, UNAUTHORIZED ACCESS, OR DATA LOSS, IS LIMITED IN ACCORDANCE WITH THE LIMITATION OF LIABILITY PROVISIONS IN OUR TERMS AND CONDITIONS. BRAVIO SHALL NOT BE LIABLE FOR INDIRECT, CONSEQUENTIAL, PUNITIVE, OR INCIDENTAL DAMAGES ARISING FROM PRIVACY INCIDENTS BEYOND THE CAPS SET FORTH IN THOSE TERMS. YOUR SOLE REMEDY IN THE EVENT OF A PRIVACY BREACH IS LIMITED TO THE REMEDIES DESCRIBED IN THE TERMS AND CONDITIONS.
                        </div>
                    </div>

                    {/* Section 15 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>15. Changes to This Policy</h2>
                        <p style={pStyle}>We reserve the right to update or modify this Privacy Policy at any time. We will notify Tenant Administrators of material changes via email or an in-application notification. Your continued use of the Service after such notification constitutes acceptance of the revised Policy. We encourage you to review this Policy periodically.</p>
                    </div>

                    {/* Section 16 */}
                    <div style={sectionStyle}>
                        <h2 style={h2Style}>16. Contact Us</h2>
                        <p style={pStyle}>For questions, concerns, or requests relating to this Privacy Policy or Bravio&apos;s data practices, please contact:</p>
                        <ul style={ulStyle}>
                            <li style={liStyle}>Email: <a href="mailto:legal@hellobravio.com" style={{ textDecoration: 'underline' }}>legal@hellobravio.com</a></li>
                            <li style={liStyle}>Website: <a href="https://hellobravio.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>hellobravio.com</a></li>
                        </ul>
                        <p style={{ ...pStyle, marginTop: '32px', fontSize: '14px' }}>Last Updated: February 24, 2026</p>
                    </div>

                </div>
            </div>
            <Footer />
        </main>
    );
}
