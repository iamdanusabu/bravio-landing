import styles from './StatsSection.module.css';

export default function StatsSection() {
    return (
        <section className={styles.section}>
            <div className="container">
                <p className={styles.overline}>Why they prefer Bravio</p>
                <h2 className={styles.headline}>Why they prefer Bravio</h2>

                <div className={styles.grid}>
                    {/* Big stat card */}
                    <div className={styles.card}>
                        <div className={styles.statNumber}>
                            3k<span className={styles.statAccent}>+</span>
                        </div>
                        <div className={styles.statTitle}>Businesses already running on Bravio</div>
                        <div className={styles.statDesc}>
                            Trusted by growing biomedical service organizations across the country.
                        </div>
                    </div>

                    {/* Instant withdrawal */}
                    <div className={styles.card}>
                        <div className={styles.statTitle}>Instant Work Order Closure at any time</div>
                        <div className={styles.statDesc}>
                            Close work orders in the field, generate service reports, and invoice clients — all in one flow.
                        </div>
                    </div>

                    {/* No asset volatility */}
                    <div className={styles.card}>
                        <div className={styles.statTitle}>No asset volatility</div>
                        <div className={styles.statDesc}>
                            Consolidated asset histories eliminate untracked service events and compliance gaps.
                        </div>
                    </div>

                    {/* 4th card */}
                    <div className={styles.card}>
                        <div className={styles.statTitle}>Zero compliance gaps</div>
                        <div className={styles.statDesc}>
                            Every PM, calibration, and repair is logged with a timestamped, audit-ready service report.
                        </div>
                    </div>

                    {/* Wide chart card */}
                    <div className={`${styles.card} ${styles.cardWide}`}>
                        <div style={{ flexShrink: 0 }}>
                            <div className={styles.statNumber} style={{ fontSize: 36 }}>$1,878,580</div>
                            <div className={styles.statDesc} style={{ marginTop: 8 }}>
                                Total revenue managed through Bravio invoicing in 2025.
                            </div>
                        </div>

                        {/* SVG sparkline chart */}
                        <div className={styles.chartWrap}>
                            <svg viewBox="0 0 400 80" preserveAspectRatio="none" style={{ width: '100%', flex: 1, display: 'block' }}>
                                <defs>
                                    <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.28" />
                                        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>

                                {/* Grid lines */}
                                {[20, 40, 60].map(y => (
                                    <line key={y} x1="0" y1={y} x2="400" y2={y}
                                        stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                                ))}

                                {/* Dense polyline — looks smooth, no bezier distortion */}
                                {(() => {
                                    // 20 x-evenly-spaced points; y values model a revenue growth curve
                                    const pts: [number, number][] = [
                                        [0, 72], [20, 70], [40, 69], [60, 67], [80, 65],
                                        [100, 62], [120, 58], [140, 53], [160, 48], [180, 44],
                                        [200, 40], [220, 36], [240, 32], [260, 28], [280, 24],
                                        [300, 20], [320, 17], [350, 14], [375, 12], [400, 10],
                                    ];
                                    const line = pts.map(([x, y]) => `${x},${y}`).join(' ');
                                    const fill = line + ' 400,80 0,80';
                                    return (
                                        <>
                                            <polygon points={fill} fill="url(#chartFill)" />
                                            <polyline points={line} fill="none"
                                                stroke="var(--accent)" strokeWidth="2.5"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </>
                                    );
                                })()}
                            </svg>

                            {/* X-axis labels */}
                            <div className={styles.chartLabels}>
                                {['Jan', 'Mar', 'May', 'Aug', 'Dec'].map(m => (
                                    <span key={m}>{m}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
