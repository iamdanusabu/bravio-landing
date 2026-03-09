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

                        <div className={styles.appSection}>
                            <div className={styles.appDescription}>
                                Get the Bravio app for Android and iOS
                            </div>
                            <div className={styles.appLinks}>
                                <a href="https://cal.com/bravio-demo/30min" target="_blank" rel="noopener noreferrer" className={styles.appButton}>
                                    <svg className={styles.appIcon} viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                                    </svg>
                                    <div className={styles.appText}>
                                        <span className={styles.appTextSmall}>Download on the</span>
                                        <span className={styles.appTextLarge}>App Store</span>
                                    </div>
                                </a>
                                <a href="https://cal.com/bravio-demo/30min" target="_blank" rel="noopener noreferrer" className={styles.appButton}>
                                    <svg className={styles.appIcon} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                                    </svg>
                                    <div className={styles.appText}>
                                        <span className={styles.appTextSmall}>GET IT ON</span>
                                        <span className={styles.appTextLarge}>Google Play</span>
                                    </div>
                                </a>
                            </div>
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
                            <Link href="https://cal.com/bravio-demo/30min" target="_blank" rel="noopener noreferrer">Contact</Link>
                        </div>

                        <div className={styles.linksCol}>
                            <h4>Resources</h4>
                            <Link href="/blog">Blog</Link>
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
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
                        <Link href="#">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
