'use client';
import React from 'react';

export default function Asset1_AntiBloat() {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: 400, height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* BACKGROUND: Legacy bloat — isolated so blur can't bleed */}
            <div style={{ position: 'absolute', top: 32, left: 16, width: '90%', height: 280, isolation: 'isolate' }}>
                <div style={{
                    width: '100%', height: '100%',
                    background: '#e2e8f0',
                    borderRadius: 10,
                    transform: 'rotate(-3deg)',
                    opacity: 0.6,
                    filter: 'blur(1px)',
                    border: '1px solid #cbd5e1',
                    padding: 16,
                    overflow: 'hidden',
                    boxSizing: 'border-box' as const,
                }}>
                    <div style={{ width: '100%', height: 14, background: '#cbd5e1', borderRadius: 4, marginBottom: 8 }} />
                    <div style={{ width: '75%', height: 14, background: '#cbd5e1', borderRadius: 4, marginBottom: 24 }} />
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8, opacity: 0.5 }}>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} style={{ height: 32, background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: 2, display: 'flex', alignItems: 'center', padding: '0 4px', fontSize: 8, color: '#94a3b8' }}>
                                MSG_ERR_{i}
                            </div>
                        ))}
                    </div>
                    <div style={{
                        position: 'absolute', bottom: 16, right: 16,
                        color: '#94a3b8', fontWeight: 700, fontSize: 20,
                        textTransform: 'uppercase',
                        transform: 'rotate(12deg)',
                        border: '3px solid #94a3b8',
                        padding: '6px 8px',
                        borderRadius: 4,
                    }}>LEGACY ERP</div>
                </div>
            </div>

            {/* FOREGROUND: Bravio card — starts flat so text is crisp */}
            <div style={{
                position: 'relative', zIndex: 20,
                width: '85%',
                background: '#fff',
                borderRadius: 20,
                boxShadow: '0 25px 50px -12px rgba(59,130,246,0.25)',
                border: '1px solid #eff6ff',
                padding: 22,
                transform: 'rotate(0deg)',
                transition: 'transform 0.3s ease',
            }}
                onMouseOver={e => (e.currentTarget.style.transform = 'rotate(1deg)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'rotate(0deg)')}
            >
                {/* Glare */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)', borderRadius: '20px 20px 0 0', pointerEvents: 'none' }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ width: 32, height: 32, background: '#2563eb', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>B</div>
                        <span style={{ fontWeight: 700, color: '#1e293b', fontSize: 15 }}>Work Order Closed</span>
                    </div>
                    <span style={{ color: '#22c55e', fontSize: 20 }}>✓</span>
                </div>

                <div style={{ background: '#eff6ff', borderRadius: 14, padding: 16, marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: 10, color: '#3b82f6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Time Saved</div>
                        <div style={{ fontSize: 26, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.04em' }}>45 Mins</div>
                    </div>
                    <div style={{ fontSize: 36 }}>🚀</div>
                </div>

                <button style={{ width: '100%', padding: '12px 0', background: '#0f172a', color: '#fff', borderRadius: 10, border: 'none', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Next Job
                </button>
            </div>
        </div>
    );
}
