import styles from './FeaturesSlider.module.css';

const features = [
    {
        title: "Automated PM Scheduling",
        desc: "Never miss a maintenance window. Automatically generate work orders based on schedules.",
        stat: "100%",
        statLabel: "Compliance Rate",
        image: "/1.png"
    },
    {
        title: "Real-time Work Orders",
        desc: "Technicians receive jobs instantly on their mobile devices. No paper, no delays.",
        stat: "-40%",
        statLabel: "Admin Time",
        image: "/2.png"
    },
    {
        title: "Asset Lifecycle Tracking",
        desc: "From procurement to retirement, track every service event and cost.",
        stat: "1.2M+",
        statLabel: "Assets Managed",
        image: "/3.png" // Reusing for demo
    },
    {
        title: "Smart Inventory",
        desc: "Know exactly what parts you have and where. Reduce leakage and rush orders.",
        stat: "Zero",
        statLabel: "Part Shortages",
        image: "/4.png"
    },
    {
        title: "Client Portal Access",
        desc: "Give hospitals transparent access to their compliance reports and service status.",
        stat: "24/7",
        statLabel: "Client Access",
        image: "/5.png"
    }
];

// Duplicate for infinite scroll
const sliderItems = [...features, ...features];

export default function FeaturesSlider() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <h2 className={styles.headline}>Powerful features built for growth</h2>
                <p className={styles.subheadline}>Everything you need to scale your biomedical service operations.</p>
            </div>

            <div className={styles.sliderContainer}>
                <div className={styles.sliderTrack}>
                    {sliderItems.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div
                                className={styles.cardBackground}
                                style={{ backgroundImage: `url(${item.image})` }}
                            ></div>
                            <div className={styles.overlay}>
                                <div className={styles.stat}>{item.stat}</div>
                                <div className={styles.statLabel}>{item.statLabel}</div>
                                <div style={{ height: 20 }}></div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
