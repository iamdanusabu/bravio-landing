import styles from './Beliefs.module.css';

export default function Beliefs() {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.left}>
                    <h2 className={styles.headline}>
                        Three beliefs that guide our company
                    </h2>
                    <p className={styles.subtext}>
                        Understand the principles that guide our decisions.
                    </p>

                    <div className={styles.founder}>
                        <div className={styles.founderImage}></div>
                        <div className={styles.founderInfo}>
                            <span className={styles.founderName}>Adam Guild</span>
                            Co-Founder and CEO at Owner
                        </div>
                    </div>
                </div>

                <div className={styles.beliefsList}>
                    <div className={styles.beliefItem}>
                        <h3 className={styles.beliefTitle}>Sales growth is more important than customization.</h3>
                        <p className={styles.beliefDesc}>
                            The third party delivery apps and the big national brands have shaped how everyone orders online. We take their best practices and give them to you.
                        </p>
                    </div>

                    <div className={styles.beliefItem}>
                        <h3 className={styles.beliefTitle}>We have to earn your business every month.</h3>
                        <p className={styles.beliefDesc}>
                            Restaurants are hard enough, you don&apos;t need another tech vendor tying you up in a long term contract. Customers vote with their feet if they don&apos;t like your restaurant.
                        </p>
                    </div>

                    <div className={styles.beliefItem}>
                        <h3 className={styles.beliefTitle}>Restaurants should own their customer relationships.</h3>
                        <p className={styles.beliefDesc}>
                            One of the cruelest byproducts of tech &quot;innovation&quot; is how you are separated from your customers. If you ever decide to leave Owner, you get to bring your customers with you.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
