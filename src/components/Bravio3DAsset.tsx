'use client';
import React from 'react';

export default function Bravio3DAsset() {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: 420, margin: '48px auto 0' }}>

            {/* MAIN APP CARD */}
            <div style={{
                background: '#fff',
                borderRadius: 32,
                padding: 32,
                boxShadow: '0 20px 50px -12px rgba(0,0,0,0.08)',
                border: '1px solid #f8fafc',
                position: 'relative',
                zIndex: 10,
                width: '92%',
            }}>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                    <div style={{
                        width: 56, height: 56,
                        background: '#0f172a',
                        borderRadius: 18,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontWeight: 700, fontSize: 24,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                        flexShrink: 0,
                    }}>B</div>
                    <div>
                        <div style={{ fontWeight: 700, color: '#0f172a', fontSize: 20, letterSpacing: '-0.02em' }}>City General</div>
                        <div style={{ fontSize: 14, color: '#64748b', fontWeight: 500, marginTop: 2 }}>Work Order #8402</div>
                    </div>
                </div>

                {/* Device Info */}
                <div style={{
                    border: '1px solid #f1f5f9',
                    borderRadius: 18,
                    padding: 24,
                    marginBottom: 24,
                    background: 'rgba(248,250,252,0.5)',
                }}>
                    <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Target Asset</div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', marginBottom: 4, letterSpacing: '-0.03em' }}>Zoll X-Series</div>
                    <div style={{ fontSize: 13, color: '#94a3b8', fontFamily: 'monospace' }}>SN: ZX-99482-11A</div>
                </div>

                {/* Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                    {[
                        { done: true, label: 'Defibrillator output test' },
                        { done: true, label: 'Pacing module verified' },
                        { done: false, label: 'Attach service label' },
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                            <div style={{
                                width: 24, height: 24, borderRadius: '50%',
                                background: item.done ? '#0f172a' : 'transparent',
                                border: item.done ? 'none' : '2px solid #e2e8f0',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: item.done ? '0 2px 6px rgba(0,0,0,0.15)' : 'none',
                            }}>
                                {item.done && <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>✓</span>}
                            </div>
                            <span style={{ fontSize: 15, color: item.done ? '#334155' : '#94a3b8', fontWeight: 500 }}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button style={{
                    width: '100%',
                    background: '#0f172a',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 15,
                    padding: '17px 0',
                    borderRadius: 14,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                    transition: 'background 0.2s',
                    letterSpacing: '-0.01em',
                }}
                    onMouseOver={e => (e.currentTarget.style.background = '#1e293b')}
                    onMouseOut={e => (e.currentTarget.style.background = '#0f172a')}
                >
                    Close Work Order
                </button>
            </div>

            {/* FLOATING 3D ASSET TAG */}
            <div style={{
                position: 'absolute',
                top: -40,
                right: -32,
                zIndex: 20,
                width: 240,
                height: 300,
                background: 'linear-gradient(135deg, #34d399 0%, #0f766e 100%)',
                borderRadius: 28,
                boxShadow: '0 30px 60px -15px rgba(16,185,129,0.5)',
                transform: 'rotate(6deg)',
                transition: 'transform 0.5s ease',
                border: '1px solid rgba(167,243,208,0.4)',
                padding: 28,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
            }}
                onMouseOver={e => (e.currentTarget.style.transform = 'rotate(3deg)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'rotate(6deg)')}
            >
                {/* Glass glare */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)',
                    pointerEvents: 'none',
                }} />

                {/* Top */}
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <div style={{ color: '#a7f3d0', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>Status</div>
                        <div style={{ color: '#fff', fontWeight: 800, fontSize: 26, letterSpacing: '-0.03em' }}>PASSED</div>
                    </div>
                    <div style={{
                        width: 40, height: 40,
                        background: 'rgba(255,255,255,0.2)',
                        border: '1px solid rgba(255,255,255,0.4)',
                        borderRadius: 10,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <div style={{ width: 22, height: 22, border: '1.5px solid rgba(255,255,255,0.6)', borderRadius: 4 }} />
                    </div>
                </div>

                {/* Mid waveform */}
                <div style={{ position: 'relative', zIndex: 1, opacity: 0.2, flexGrow: 1, display: 'flex', alignItems: 'center', padding: '16px 0' }}>
                    <div style={{ width: '100%', borderTop: '2px solid rgba(255,255,255,0.5)', borderBottom: '2px solid rgba(255,255,255,0.5)', height: 40, display: 'flex', alignItems: 'center' }}>
                        <div style={{ width: '100%', height: 1, background: '#fff' }} />
                    </div>
                </div>

                {/* Bottom */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                        <span style={{ color: '#d1fae5', fontSize: 11, fontFamily: 'monospace' }}>CAL DATE: 02/23/26</span>
                        <span style={{ color: '#d1fae5', fontSize: 11, fontFamily: 'monospace' }}>TECH: JD</span>
                    </div>
                    <div style={{ color: '#fff', fontWeight: 700, letterSpacing: '0.1em', fontSize: 16 }}>VALID UNTIL 2027</div>
                </div>
            </div>

        </div>
    );
}
