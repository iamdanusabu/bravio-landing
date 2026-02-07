'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolled enough to change style
            if (currentScrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Removed dynamic visibility - always show sticky header
            setVisible(true);

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${!visible ? styles.hidden : ''}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.left}>
                    <Link href="/" className={styles.logo}>
                        Bravio
                    </Link>

                    <nav className={styles.nav}>
                        <div className={styles.navItem}>
                            <div className={styles.link}>Platform ▾</div>
                            <div className={styles.megaMenu}>
                                <div className={styles.megaContainer}>
                                    <div className={styles.megaColumn}>
                                        <Link href="#" className={styles.megaLink}>Field Service</Link>
                                        <span className={styles.megaDesc}>Dispatch techs, optimize routes, mobile-first.</span>

                                        <Link href="#" className={styles.megaLink}>Compliance</Link>
                                        <span className={styles.megaDesc}>Automated reporting for JCAHO, DNV, AAMI.</span>
                                    </div>
                                    <div className={styles.megaColumn}>
                                        <Link href="#" className={styles.megaLink}>Financial Management</Link>
                                        <span className={styles.megaDesc}>Track profitability per asset & contract.</span>

                                        <Link href="#" className={styles.megaLink}>Time Tracking</Link>
                                        <span className={styles.megaDesc}>Capture billable hours & util.</span>
                                    </div>
                                    <div className={styles.megaColumn}>
                                        <Link href="#" className={styles.megaLink}>Resource Management</Link>
                                        <span className={styles.megaDesc}>Real-time tech availability.</span>

                                        <Link href="#" className={styles.megaLink}>Customer Portal</Link>
                                        <span className={styles.megaDesc}>24/7 service requests.</span>
                                    </div>
                                    <div className={styles.megaColumn}>
                                        <Link href="#" className={styles.megaLink}>AI Insights</Link>
                                        <span className={styles.megaDesc}>Predict failures & optimize inventory.</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <Link href="/faq" className={styles.link}>FAQ</Link>
                        <Link href="#" className={styles.link}>Resources</Link>
                        <Link href="/#pricing" className={styles.link}>Pricing</Link>
                    </nav>
                </div>

                <div className={styles.right}>
                    <Link href="#" className={styles.login}>Log in</Link>
                    <Link href="https://cal.com/nevolabs-f6qxzs/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Book a demo</Link>
                </div>
            </div>
        </header>
    );
}
