import Link from 'next/link';
import styles from './Resources.module.css';

export default function Resources() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.headline}>
                        See our free guides on growing your restaurant
                    </h2>
                    <Link href="#" className="btn btn-primary">Read the blog ›</Link>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardBackground} style={{ backgroundColor: '#222' }}></div>
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>
                                3 Best Restaurant Marketing Ideas For 2025 (with AI Strategies)
                            </h3>
                            <div className={styles.playIcon}></div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardBackground} style={{ backgroundColor: '#444' }}></div>
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>
                                Restaurant SEO is Easier Than You Think (3 Big Wins)
                            </h3>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardBackground} style={{ backgroundColor: '#666' }}></div>
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>
                                Buyer&apos;s Guide: The Best Restaurant Website Builders
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
