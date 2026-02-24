import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Bravio — Biomedical Field Service Management Software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0a0a0f 0%, #0f172a 60%, #1e1b4b 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '80px 96px',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Decorative gradient orb */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-120px',
                        right: '-80px',
                        width: '500px',
                        height: '500px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-100px',
                        left: '200px',
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
                    }}
                />

                {/* Badge */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: 'rgba(99,102,241,0.15)',
                        border: '1px solid rgba(99,102,241,0.4)',
                        borderRadius: '100px',
                        padding: '8px 20px',
                        marginBottom: '32px',
                    }}
                >
                    <span style={{ color: '#a5b4fc', fontSize: '18px', fontWeight: 600 }}>
                        Built for Biomedical ISO Teams
                    </span>
                </div>

                {/* Logo / Brand */}
                <div
                    style={{
                        fontSize: '72px',
                        fontWeight: 800,
                        color: '#ffffff',
                        letterSpacing: '-2px',
                        marginBottom: '20px',
                        lineHeight: 1,
                    }}
                >
                    Bravio
                </div>

                {/* Tagline */}
                <div
                    style={{
                        fontSize: '32px',
                        fontWeight: 500,
                        color: '#94a3b8',
                        maxWidth: '720px',
                        lineHeight: 1.4,
                        marginBottom: '48px',
                    }}
                >
                    FSM Software for Biomedical Service Teams — Not Enterprise Bloat.
                </div>

                {/* Feature pills */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {['PM Automation', 'Work Orders', 'ISO 13485 Reports', 'Invoicing', 'Asset Tracking'].map((f) => (
                        <div
                            key={f}
                            style={{
                                background: 'rgba(255,255,255,0.06)',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: '8px',
                                padding: '10px 20px',
                                color: '#e2e8f0',
                                fontSize: '17px',
                                fontWeight: 500,
                            }}
                        >
                            {f}
                        </div>
                    ))}
                </div>

                {/* URL */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '48px',
                        right: '96px',
                        fontSize: '20px',
                        color: '#475569',
                        fontWeight: 500,
                    }}
                >
                    hellobravio.com
                </div>
            </div>
        ),
        { ...size },
    );
}
