import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            Bravio
                        </Link>
                        <p className={styles.description}>
                            ISO-aligned Field Service Management for<br /> biomedical device maintenance and traceability.
                        </p>
                        <div className={styles.address}>
                            3524, Silverside Suite 35B,<br /> Wilmington, Delaware 19810-4929
                        </div>

                        <div className={styles.socials}>
                            {/* Social icons placeholder */}
                            <div className={styles.socialIcon}>𝕏</div>
                            <div className={styles.socialIcon}>in</div>
                            <div className={styles.socialIcon}>IG</div>
                        </div>
                    </div>

                    <div className={styles.linksGrid}>
                        <div className={styles.linksCol}>
                            <h4>Platform</h4>
                            <Link href="#">Asset Management</Link>
                            <Link href="#">Work Order Management</Link>
                            <Link href="#">PM Automation</Link>
                            <Link href="#">Technician Dispatch</Link>
                            <Link href="#">Compliance Reporting</Link>
                        </div>

                        <div className={styles.linksCol}>
                            <h4>Company</h4>
                            <Link href="#">About Us</Link>
                            <Link href="#">Careers</Link>
                            <Link href="#">Customers</Link>
                            <Link href="https://cal.com/nevolabs-f6qxzs/30min" target="_blank" rel="noopener noreferrer">Contact</Link>
                        </div>

                        <div className={styles.linksCol}>
                            <h4>Resources</h4>
                            <Link href="#">Blog</Link>
                            <Link href="#">Knowledge Base</Link>
                            <Link href="#">System Status</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.copyright}>
                        © 2025 Bravio by nevolabs. All rights reserved.
                    </div>
                    <div className={styles.legalLinks}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                        <Link href="#">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
