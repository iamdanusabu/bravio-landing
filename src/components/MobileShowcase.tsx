import styles from './MobileShowcase.module.css';

export default function MobileShowcase() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.headline}>
                    Give your restaurant the same tech as the big brands
                </h2>

                <div className={styles.grid}>
                    <div className={styles.largeCard}>
                        {/* Background image would replace this style */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, width: '100%', height: '100%',
                            background: 'linear-gradient(45deg, #333, #111)',
                            zIndex: 1
                        }}></div>

                        <div className={styles.largeCardContent}>
                            <p className={styles.largeCardText}>
                                Your customers are used to ordering on their phone.
                                That&apos;s why we give your restaurant its own <strong>mobile app</strong>.
                            </p>
                        </div>
                    </div>

                    <div className={styles.smallCard}>
                        <div className={styles.cardImagePlaceholder}>
                            <div className={styles.uiBrowser}>
                                <div className={styles.uiLine} style={{ height: 20, width: '40%' }}></div>
                                <div className={styles.uiLine}></div>
                                <div className={styles.uiLine}></div>
                                <div className={styles.uiLine} style={{ width: '80%' }}></div>
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Get higher Google rankings</h3>
                        <p className={styles.cardDesc}>
                            with your AI-powered restaurant website.
                        </p>
                    </div>

                    <div className={styles.smallCard}>
                        <div className={styles.cardImagePlaceholder}>
                            {/* Placeholder for food image card */}
                            <div className={styles.uiBrowser} style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: 60, height: 60, borderRadius: '50%', background: '#eee' }}></div>
                            </div>

                            <div className={styles.cardTag}>
                                Chicken Ravioli
                            </div>
                        </div>
                        <h3 className={styles.cardTitle}>Grow your sales</h3>
                        <p className={styles.cardDesc}>
                            with an <strong>online ordering system</strong> modeled after the big brands.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
