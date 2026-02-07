import styles from './OwnerStories.module.css';

export default function OwnerStories() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.headline}>Trusted by thousands of owners</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardImage} style={{ backgroundColor: '#554433' }}></div>
                        <div className={styles.userInfo}>
                            <span className={styles.userTitle}>Sandy Sei</span>
                            Owner of Cyclo Noodles
                        </div>
                        <div className={styles.overlay}>
                            <div className={styles.statDesc}>
                                How Cyclo Noodles grew direct online sales by <strong>7X</strong> by switching to Owner.com
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardImage} style={{ backgroundColor: '#334433' }}></div>
                        <div className={styles.userInfo}>
                            <span className={styles.userTitle}>Hengameh Stanfield</span>
                            Co-owner of Mattenga&apos;s Pizzeria
                        </div>
                        <div className={styles.overlay}>
                            <div className={styles.statDesc}>
                                How Mattenga&apos;s Pizzeria drove <strong>$192,000</strong> in 30 days with Owner.com
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardImage} style={{ backgroundColor: '#333344' }}></div>
                        <div className={styles.userInfo}>
                            <span className={styles.userTitle}>Rahul Bhatia</span>
                            Owner of Saffron Indian Kitchen
                        </div>
                        <div className={styles.overlay}>
                            <div className={styles.statLarge}>+$4,500,000</div>
                            <div className={styles.statDesc}>
                                /year online sales
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardImage} style={{ backgroundColor: '#443333' }}></div>
                        <div className={styles.userInfo}>
                            <span className={styles.userTitle}>John & Sam</span>
                            Owners at Metro Pizza
                        </div>
                        <div className={styles.overlay}>
                            <div className={styles.statDesc}>
                                How Metro Pizza increased direct online sales by <strong>$10,000/m</strong> by switching to Owner.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
