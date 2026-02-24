'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import Asset1_AntiBloat from './Asset1_AntiBloat';
import Asset2_SpeedCycle from './Asset2_SpeedCycle';
import Asset3_Automation from './Asset3_Automation';
import Asset4_Velocity from './Asset4_Velocity';

const heroOptions = [
    {
        badge: "Built for Small Biomedical ISO Teams",
        headline: "FSM for Small Biomedical Service Teams — Not Enterprise Bloat",
        subheadline: "Close work orders, generate service reports, and send invoices faster. Everything your 5–50 technician team needs — nothing you don't.",
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

const assets = [
    Asset1_AntiBloat,
    Asset2_SpeedCycle,
    Asset3_Automation,
    Asset4_Velocity,
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [displayedHeadline, setDisplayedHeadline] = useState("");
    const [visible, setVisible] = useState(true);
    const currentOption = heroOptions[index];
    const ActiveAsset = assets[index];

    // Rotation Timer — fade out, swap, fade in
    useEffect(() => {
        const timer = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % heroOptions.length);
                setVisible(true);
            }, 400);
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
        }, 40);

        return () => clearInterval(typeTimer);
    }, [index]);

    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.inner}>
                    {/* Left: Text content */}
                    <div className={styles.leftCol}>
                        <div className={styles.badgeContainer}>
                            {/* Clickable badge dots */}
                            <div className={styles.badgeDots}>
                                {heroOptions.map((o, i) => (
                                    <button
                                        key={i}
                                        className={`${styles.badgeDot} ${i === index ? styles.badgeDotActive : ''}`}
                                        onClick={() => {
                                            setVisible(false);
                                            setTimeout(() => { setIndex(i); setVisible(true); }, 400);
                                        }}
                                        aria-label={o.badge}
                                    />
                                ))}
                            </div>
                            <span className={styles.badge}>{currentOption.badge}</span>
                        </div>

                        <h1 className={styles.headline}>
                            {displayedHeadline}<span className={styles.cursor}>|</span>
                        </h1>

                        <p className={styles.subheadline}>
                            {currentOption.subheadline}
                        </p>

                        <div className={styles.ctaRow}>
                            <Link href="https://cal.com/nevolabs-f6qxzs/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{currentOption.ctaPrimary}</Link>
                            <button className="btn" style={{ border: '1px solid #ddd' }}>{currentOption.ctaSecondary}</button>
                        </div>

                        <div className={styles.trustRow}>
                            <span className={styles.trustItem}>ISO 13485 Compliant</span>
                            <span className={styles.trustItem}>SOC2 Aligned</span>
                            <span className={styles.trustItem}>1.2M+ Assets Managed</span>
                        </div>
                    </div>

                    {/* Right: Animated asset */}
                    <div className={styles.rightCol}>
                        <div
                            className={styles.assetWrapper}
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
                                transition: 'opacity 0.4s ease, transform 0.4s ease',
                            }}
                        >
                            <ActiveAsset />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
