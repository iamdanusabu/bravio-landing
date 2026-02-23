import Link from 'next/link';
import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <section id="pricing" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <p className={styles.overline}>Choose your plan</p>
                    <h2 className={styles.headline}>Simple, Transparent Pricing</h2>
                    <p className={styles.subheadline}>Choose the plan that fits your service volume. No hidden fees.</p>
                </div>

                <div className={styles.grid}>
                    {/* Starter */}
                    <div className={styles.card}>
                        <div className={styles.planName}>Plus</div>
                        <div className={styles.price}>$149 <span className={styles.pricePeriod}>/ month</span></div>
                        <p className={styles.planDesc}>Up to 15 users. For small service teams replacing spreadsheets.</p>

                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Customer &amp; Facility Management</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Asset Registry &amp; Service History</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Work Orders &amp; Scheduling</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> PM Schedules &amp; Due Lists</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Service Invoicing</div>
                        </div>

                        <Link href="https://cal.com/nevolabs-f6qxzs/30min" target="_blank" rel="noopener noreferrer" className={styles.cardBtn}>
                            Get Started <span className={styles.arrow}>→</span>
                        </Link>
                    </div>

                    {/* Grow — Popular */}
                    <div className={`${styles.card} ${styles.popularCard}`}>
                        <div className={styles.popularBadge}>Most Popular</div>
                        <div className={styles.planName}>Premium</div>
                        <div className={styles.price}>$299 <span className={styles.pricePeriod}>/ month</span></div>
                        <p className={styles.planDesc}>Up to 30 users. For growing businesses with PM volume.</p>

                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Everything in Plus</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> PM Automation Board</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Bulk PM Reminders</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Customer Self-Service Booking</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Job Downtime Tracking</div>
                        </div>

                        <Link href="https://cal.com/nevolabs-f6qxzs/30min" target="_blank" rel="noopener noreferrer" className={styles.cardBtn}>
                            Get Started <span className={styles.arrow}>→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
