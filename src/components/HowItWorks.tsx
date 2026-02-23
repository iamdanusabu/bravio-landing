import styles from './HowItWorks.module.css';

const steps = [
    {
        number: '1',
        title: "Open your account",
        desc: "Sign up in minutes and configure your service team. No training, no implementation fees."
    },
    {
        number: '2',
        title: "Transfer your roster",
        desc: "Import your assets, customers, and facilities from spreadsheets or existing software instantly."
    },
    {
        number: '3',
        title: "Watch your balance grow",
        desc: "Automate PM schedules, close work orders faster, and issue invoices — all in one place."
    },
];

export default function HowItWorks() {
    return (
        <section className={styles.section}>
            <div className="container">
                <p className={styles.overline}>How it works</p>
                <h2 className={styles.headline}>Maximize your returns with a platform that generates.</h2>

                <div className={styles.stepsGrid}>
                    {steps.map((step) => (
                        <div key={step.number} className={styles.step}>
                            <div className={styles.stepNumber}>{step.number}</div>
                            <div className={styles.stepTitle}>{step.title}</div>
                            <div className={styles.stepDesc}>{step.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
