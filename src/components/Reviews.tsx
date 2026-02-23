import styles from './Reviews.module.css';

export default function Reviews() {
    const reviews = [
        {
            text: "Before Bravio, we were drowning in paper PM checklists. Now, we pass every audit with zero findings because every inspection is digitally stamped and instantly retrievable.",
            author: "Sarah J.",
            role: "Clinical Engineering Director"
        },
        {
            text: "The mobile app is a game changer. Techs stopped calling the office to ask about history or parts. They have everything they need right on their phone.",
            author: "Mike R.",
            role: "Field Service Manager"
        },
        {
            text: "We scaled from 10 to 45 technicians without hiring a single new dispatcher. Bravio's automated scheduling ensures the right tech gets the job, every time.",
            author: "David L.",
            role: "VP of Operations"
        },
        {
            text: "Inventory leakage was costing us thousands a month. Now we track every part from the warehouse to the van. Our first-time fix rates are up 30%.",
            author: "Elena K.",
            role: "Supply Chain Manager"
        },
        {
            text: "The customer portal gives our clients total transparency. They can request service and download reports 24/7. It's a huge competitive advantage for us.",
            author: "James T.",
            role: "Owner, BioCare Services"
        },
        {
            text: "Finally, software built for ISOs. We stopped using Excel and Google Drive. Everything is in one place now.",
            author: "Robert C.",
            role: "Senior BMET"
        }
    ];

    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <p className={styles.overline}>Confirmed reviews</p>
                    <h2 className={styles.headline}>
                        We&apos;ve helped innovative companies
                    </h2>
                    <p className={styles.subheadline}>
                        See why we&apos;re rated #1 in biomed software by field service teams nationwide.
                    </p>
                </div>

                {/* Key stats */}
                <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>24%</div>
                        <div className={styles.statLabel}>Revenue increase</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>180K</div>
                        <div className={styles.statLabel}>Annual revenue</div>
                    </div>
                    <div className={styles.statItem}>
                        <div className={styles.statNumber}>10+</div>
                        <div className={styles.statLabel}>Months of savings</div>
                    </div>
                </div>

                {/* Badges */}
                <div className={styles.badges}>
                    <div className={styles.badge}>
                        <span>🏆</span> Rated #1 Field Service Management
                    </div>
                    <div className={styles.badge}>
                        <span>🏅</span> Leader Position Winter 2026
                    </div>
                </div>

                <div className={styles.cardGrid}>
                    {reviews.map((review, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.stars}>★★★★★</div>
                            <p className={styles.reviewText}>
                                &quot;{review.text}&quot;
                            </p>
                            <div className={styles.user}>
                                <div className={styles.avatar}></div>
                                <div>
                                    <span className={styles.userName}>{review.author}</span>
                                    <span className={styles.userRole}>{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaContainer}>
                    <button className="btn btn-primary" style={{ padding: '0 32px' }}>See all reviews ›</button>
                </div>
            </div>
        </section>
    );
}
