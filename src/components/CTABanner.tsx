import Link from 'next/link';
import styles from './CTABanner.module.css';

export default function CTABanner() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.inner}>
                    <div>
                        <p className={styles.overline}>Get started</p>
                        <h2 className={styles.headline}>Ready to level up your payment process?</h2>
                        <p className={styles.subheadline}>
                            Replace operational chaos with clarity. Simple setup. No heavy customization required.
                        </p>
                    </div>

                    <div className={styles.btnRow}>
                        <Link
                            href="https://cal.com/nevolabs-f6qxzs/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-accent"
                            style={{ padding: '0 32px' }}
                        >
                            Get Started Now
                        </Link>
                        <button className={styles.btnSecondary}>Learn More →</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
