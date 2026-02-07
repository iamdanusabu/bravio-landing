'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const heroOptions = [
    {
        badge: "Built for Small Biomedical ISO Teams",
        headline: "FSM for Small Biomedical Service Teams — Not Enterprise Bloat",
        subheadline: "Close work orders, generate service reports, and send invoices faster. Everything your 5–50 technician team needs — nothing you don’t.",
        ctaPrimary: "Request a Demo",
        ctaSecondary: "See How It Works"
    },
    {
        badge: "For ISO Teams with 5–50 Technicians",
        headline: "Stop Using Enterprise FSM for Small Service Teams",
        subheadline: "Convert work orders to reports and invoices in minutes. Run PMs, scheduling, and documentation without the overhead.",
        ctaPrimary: "Watch Demo",
        ctaSecondary: "Take a Product Tour"
    },
    {
        badge: "Designed for Lean Biomedical Service Ops",
        headline: "Your Techs Fix Equipment — We Handle the Paperwork Flow",
        subheadline: "Generate compliant service reports, close PMs, and create invoices quickly with FSM software made for small ISO teams.",
        ctaPrimary: "Try the Demo",
        ctaSecondary: "Explore Features"
    },
    {
        badge: "Not Built for Enterprises — Built for You",
        headline: "FSM Software for Small Biomedical Teams Who Need Speed",
        subheadline: "Faster reports. Faster work order closure. Faster invoices. Purpose-built for 5–50 technician ISO service companies.",
        ctaPrimary: "Request a Demo",
        ctaSecondary: "Take a Tour"
    }
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [displayedHeadline, setDisplayedHeadline] = useState("");
    const currentOption = heroOptions[index];

    // Rotation Timer
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % heroOptions.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    // Typing Animation
    useEffect(() => {
        setDisplayedHeadline("");
        let charIndex = 0;
        const fullText = heroOptions[index].headline;

        const typeTimer = setInterval(() => {
            if (charIndex < fullText.length) {
                setDisplayedHeadline(fullText.slice(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeTimer);
            }
        }, 40); // Typing speed

        return () => clearInterval(typeTimer);
    }, [index]);

    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.badgeContainer}>
                    <span className={styles.badge} key={index}>{/* Add key to trigger animation restart if needed */}
                        {currentOption.badge}
                    </span>
                </div>
                <h1 className={styles.headline}>
                    {displayedHeadline}<span className={styles.cursor}>|</span>
                </h1>

                <p className={styles.subheadline} style={{ fontSize: 18, color: 'var(--muted)', maxWidth: 700, margin: '0 auto 40px', lineHeight: 1.5 }}>
                    {currentOption.subheadline}
                </p>

                <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 60 }}>
                    <Link href="https://cal.com/nevolabs-f6qxzs/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{currentOption.ctaPrimary}</Link>
                    <button className="btn" style={{ border: '1px solid #ddd' }}>{currentOption.ctaSecondary}</button>
                </div>

                <div className={styles.visualContainer}>
                    <img
                        src="/dashboard.png"
                        alt="Bravio Dashboard"
                        className={styles.dashboardImage}
                    />
                </div>

                <div style={{ marginTop: 60, display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap', color: 'var(--muted)', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                    <span>ISO 13485 Compliant</span>
                    <span>SOC2 Certified</span>
                    <span>1.2M+ Assets Managed</span>
                    <span>2500+ Active Techs</span>
                </div>
            </div>
        </section>
    );
}
