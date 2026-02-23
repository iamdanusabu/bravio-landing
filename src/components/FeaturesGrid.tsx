import styles from './FeaturesGrid.module.css';

const features = [
    {
        icon: '🗓️',
        title: "Automated PM Scheduling",
        desc: "Never miss a maintenance window. Automatically generate work orders based on schedules.",
        stat: null,
        wide: false,
    },
    {
        icon: '⚡',
        title: "Real-time Work Orders",
        desc: "Technicians receive jobs instantly on their mobile devices. No paper, no delays.",
        stat: null,
        wide: false,
    },
    {
        icon: '📦',
        title: "Smart Inventory",
        desc: "Know exactly what parts you have and where. Reduce leakage and rush orders.",
        stat: null,
        wide: false,
    },
    {
        icon: '📊',
        title: "Asset Lifecycle Tracking",
        desc: "From procurement to retirement, track every service event and cost across all locations.",
        stat: null,
        wide: true,
    },
    {
        icon: '🔗',
        title: "Client Portal Access",
        desc: "Give hospitals transparent access to their compliance reports and service status 24/7.",
        stat: null,
        wide: false,
    },
];

const stats = [
    { number: "1.2M+", label: "Assets Managed" },
    { number: "-40%", label: "Admin Time" },
    { number: "100%", label: "Compliance Rate" },
];

export default function FeaturesGrid() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <p className={styles.overline}>For any reason</p>
                    <h2 className={styles.headline}>Powerful features built for growth</h2>
                    <p className={styles.subheadline}>Everything you need to scale your biomedical service operations.</p>
                </div>

                <div className={styles.bentoGrid}>
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className={`${styles.bentoCard} ${f.wide ? styles.bentoCardWide : ''}`}
                        >
                            <div className={styles.iconWrap}>{f.icon}</div>
                            <div className={styles.cardTitle}>{f.title}</div>
                            <div className={styles.cardDesc}>{f.desc}</div>
                        </div>
                    ))}

                    {/* Stat cards */}
                    {stats.map((s, i) => (
                        <div key={`stat-${i}`} className={styles.bentoCard}>
                            <div className={styles.statNumber}>{s.number}</div>
                            <div className={styles.statLabel}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
