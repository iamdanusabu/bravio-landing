import styles from './Challenges.module.css';

export default function Challenges() {
    return (
        <section className={styles.section}>
            <div className="container">

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>PMs tracked manually across spreadsheets</h3>
                        <p className={styles.cardDesc}>
                            Stop relying on memory or Excel. Know exactly what&apos;s due this week, what&apos;s overdue, and what&apos;s completed.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Work orders coming from calls, messages, and emails</h3>
                        <p className={styles.cardDesc}>
                            Centralize every request. Create work orders in seconds and assign technicians without the back-and-forth.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>Service reports delayed or inconsistent</h3>
                        <p className={styles.cardDesc}>
                            Turn technician notes into professional reports automatically. No more chasing techs for paperwork.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <h3 className={styles.cardTitle}>No single view of customers, devices, and technicians</h3>
                        <p className={styles.cardDesc}>
                            Find any device or service history instantly. Answer customer questions in seconds, not hours.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
