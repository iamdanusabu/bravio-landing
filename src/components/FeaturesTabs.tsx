'use client';
import { useState } from 'react';
import styles from './FeaturesTabs.module.css';

export default function FeaturesTabs() {
    const [activeTab, setActiveTab] = useState('PM Tracking');

    const tabs = ['PM Tracking', 'Work Orders', 'Service Reports'];

    return (
        <section className={styles.section}>
            <div className="container">
                <h2 className={styles.headline}>
                    Everything you need to run your biomed service business
                </h2>

                <div className={styles.tabs}>
                    {tabs.map((tab, i) => (
                        <div
                            key={tab}
                            className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <span className={styles.tabNumber}>{i + 1}</span>
                            <span className={styles.tabText}>{tab}</span>
                        </div>
                    ))}
                </div>

                <div className={`${styles.contentContainer} ${activeTab === 'PM Tracking' ? styles.fullPadding : ''}`}>
                    {activeTab === 'PM Tracking' && (
                        <div className={styles.fullImageContainer}>
                            <img
                                src="/feature1.png"
                                alt="PM Tracking Dashboard"
                                className={styles.fullWidthImage}
                            />
                        </div>
                    )}

                    {activeTab === 'Work Orders' && (
                        <>
                            <div className={styles.textContent}>
                                <div className={styles.contentTitle}>Log and close service calls fast</div>
                                <h3 className={styles.contentHeadline}>
                                    Create work orders in seconds, assign technicians, and track status.
                                </h3>
                                <p style={{ lineHeight: 1.5, color: '#666' }}>
                                    Give technicians everything they need on their mobile device: work orders, checklists, manuals, and signature capture.
                                </p>
                                <div style={{ marginTop: 20 }}>
                                    <div style={{ marginBottom: 8, fontWeight: 600 }}>✓ Fast Assignment</div>
                                    <div style={{ marginBottom: 8, fontWeight: 600 }}>✓ Mobile Access</div>
                                    <div style={{ marginBottom: 8, fontWeight: 600 }}>✓ Digital Signatures</div>
                                </div>
                            </div>

                            <div className={styles.flowContainer} style={{ background: 'white', padding: 20, borderRadius: 16, alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: 200, height: 300, border: '4px solid #333', borderRadius: 20, background: '#fafafa', position: 'relative', display: 'flex', flexDirection: 'column', padding: 10 }}>
                                    <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 10 }}>Work Order #4920</div>
                                    <div style={{ fontSize: 10, marginBottom: 4 }}>Checklist</div>
                                    <div style={{ display: 'flex', gap: 4, alignItems: 'center', fontSize: 9 }}><div style={{ width: 8, height: 8, border: '1px solid #ccc', borderRadius: 2 }}></div> Inspect cables</div>
                                    <div style={{ display: 'flex', gap: 4, alignItems: 'center', fontSize: 9, marginTop: 4 }}><div style={{ width: 8, height: 8, border: '1px solid #ccc', borderRadius: 2 }}></div> Verify grounding</div>

                                    <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: 8 }}>
                                        <div style={{ fontSize: 9, color: '#888' }}>Technician Signature</div>
                                        <div style={{ fontFamily: 'cursive', fontSize: 12 }}>John Doe</div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'Service Reports' && (
                        <>
                            <div className={styles.textContent}>
                                <div className={styles.contentTitle}>Generate service reports automatically</div>
                                <h3 className={styles.contentHeadline}>
                                    Turn technician notes into professional reports ready to share.
                                </h3>
                                <p style={{ lineHeight: 1.5, color: '#666' }}>
                                    Provide your clients with detailed service reports, including photos, parts used, and compliance checks.
                                </p>
                                <div style={{ marginTop: 20 }}>
                                    <div style={{ marginBottom: 8, fontWeight: 600 }}>✓ Instant Generation</div>
                                    <div style={{ marginBottom: 8, fontWeight: 600 }}>✓ Photo Evidence</div>
                                    <div style={{ marginBottom: 8, fontWeight: 600 }}>✓ Customer Portal</div>
                                </div>
                            </div>

                            <div className={styles.flowContainer} style={{ background: 'white', padding: 30, borderRadius: 4, boxShadow: '0 2px 10px rgba(0,0,0,0.1)', height: 320, width: 240, border: '1px solid #eee' }}>
                                <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 20, textAlign: 'center' }}>SERVICE REPORT</div>
                                <div style={{ height: 6, background: '#ddd', marginBottom: 8 }}></div>
                                <div style={{ height: 6, background: '#eee', marginBottom: 8 }}></div>
                                <div style={{ height: 6, background: '#eee', marginBottom: 8, width: '80%' }}></div>

                                <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                                    <div style={{ height: 40, background: '#f0f0f0' }}></div>
                                    <div style={{ height: 40, background: '#f0f0f0' }}></div>
                                </div>

                                <div style={{ marginTop: 20, fontSize: 10, color: 'green', fontWeight: 600, textAlign: 'center' }}>PASSED</div>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </section>
    );
}
