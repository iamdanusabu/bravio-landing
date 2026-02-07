import Link from 'next/link';
import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <section id="pricing" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.headline}>Simple, Transparent Pricing</h2>
                    <p className={styles.subheadline}>Choose the plan that fits your service volume. No hidden fees.</p>
                </div>

                <div className={styles.grid}>
                    {/* Starter */}
                    <div className={styles.card}>
                        <div className={styles.planName}>Starter</div>
                        <div className={styles.price}>$149 <span className={styles.pricePeriod}>/ month</span></div>
                        <p className={styles.planDesc}>Up to 15 users. For small service teams replacing spreadsheets.</p>

                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Customer & Facility Management</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Asset Registry & Service History</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Work Orders & Scheduling</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> PM Schedules & Due Lists</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Service Invoicing</div>
                        </div>

                        <button className={styles.cardBtn}>Get Started</button>
                    </div>

                    {/* Grow */}
                    <div className={`${styles.card} ${styles.popularCard}`}>
                        <div className={styles.popularBadge}>Most Popular</div>
                        <div className={styles.planName}>Grow</div>
                        <div className={styles.price}>$299 <span className={styles.pricePeriod}>/ month</span></div>
                        <p className={styles.planDesc}>Up to 30 users. For growing businesses with PM volume.</p>

                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Everything in Starter</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> PM Automation Board</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Bulk PM Reminders</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Customer Self-Service Booking</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Job Downtime Tracking</div>
                        </div>

                        <button className={`${styles.cardBtn} ${styles.primaryBtn}`}>Get Started</button>
                    </div>

                    {/* Pro */}
                    <div className={styles.card}>
                        <div className={styles.planName}>Pro</div>
                        <div className={styles.price}>$499 <span className={styles.pricePeriod}>/ month</span></div>
                        <p className={styles.planDesc}>Up to 50 users. For high-volume, multi-location teams.</p>

                        <div className={styles.featuresList}>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Everything in Grow</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Multi-Location Asset Views</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Technician Productivity Reports</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Asset Reliability Tracking</div>
                            <div className={styles.featureItem}><span className={styles.featureIcon}>✓</span> Priority Support</div>
                        </div>

                        <button className={styles.cardBtn}>Get Started</button>
                    </div>


                </div>
            </div>
        </section>
    );
}
