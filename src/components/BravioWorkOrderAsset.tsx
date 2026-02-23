'use client';
import React from 'react';

export default function BravioWorkOrderAsset() {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: 380, margin: '0 auto' }}>

            {/* MAIN WORK ORDER CARD */}
            <div style={{
                background: '#fff',
                borderRadius: 28,
                padding: 28,
                boxShadow: '0 24px 60px rgba(0,0,0,0.13)',
                border: '1px solid #f1f5f9',
                position: 'relative',
                zIndex: 10,
            }}>

                {/* Header / Status */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                    <span style={{
                        background: '#dbeafe',
                        color: '#1d4ed8',
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '5px 12px',
                        borderRadius: 999,
                        textTransform: 'uppercase',
                        letterSpacing: '0.07em',
                    }}>Preventative Maint.</span>
                    <span style={{ color: '#94a3b8', fontSize: 13, fontWeight: 500 }}>WO #1042</span>
                </div>

                {/* Hospital / Location */}
                <div style={{ marginBottom: 22 }}>
                    <div style={{ fontWeight: 700, color: '#1e293b', fontSize: 20, marginBottom: 4 }}>Mercy General Hospital</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#64748b', fontSize: 13 }}>
                        <span>📍</span>
                        <span>ICU - Room 412</span>
                    </div>
                </div>

                {/* Asset Info Nested Card */}
                <div style={{
                    background: '#f8fafc',
                    borderRadius: 18,
                    padding: 16,
                    border: '1px solid #e2e8f0',
                    marginBottom: 22,
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 16,
                }}>
                    <div style={{
                        width: 48, height: 48,
                        background: '#fff',
                        borderRadius: 14,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                        border: '1px solid #e2e8f0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 22,
                        flexShrink: 0,
                    }}>🏥</div>
                    <div>
                        <div style={{ fontSize: 10, color: '#94a3b8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 3 }}>Target Asset</div>
                        <div style={{ color: '#0f172a', fontWeight: 700, fontSize: 16, lineHeight: 1.25 }}>Alaris 8100 Infusion Pump</div>
                        <div style={{ color: '#94a3b8', fontSize: 12, fontFamily: 'monospace', marginTop: 4 }}>SN: 8472-AL-99</div>
                    </div>
                </div>

                {/* Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                    {[
                        { done: true, label: 'Verify battery integrity' },
                        { done: true, label: 'Perform flow rate test' },
                        { done: false, label: 'Update service label' },
                    ].map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div style={{
                                width: 22, height: 22, borderRadius: '50%',
                                background: item.done ? '#2563eb' : 'transparent',
                                border: item.done ? 'none' : '2px solid #cbd5e1',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                            }}>
                                {item.done && <span style={{ color: '#fff', fontSize: 11, fontWeight: 700 }}>✓</span>}
                            </div>
                            <span style={{ fontSize: 14, color: item.done ? '#334155' : '#94a3b8', fontWeight: item.done ? 500 : 400 }}>
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <button style={{
                    width: '100%',
                    background: '#2563eb',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 15,
                    padding: '15px 0',
                    borderRadius: 14,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    boxShadow: '0 8px 20px rgba(37,99,235,0.3)',
                    transition: 'background 0.2s',
                }}
                    onMouseOver={e => (e.currentTarget.style.background = '#1d4ed8')}
                    onMouseOut={e => (e.currentTarget.style.background = '#2563eb')}
                >
                    Generate Report
                </button>
            </div>

            {/* FLOATING SUCCESS BADGE */}
            <div style={{
                position: 'absolute',
                bottom: -24,
                right: -24,
                zIndex: 20,
                background: '#fff',
                borderRadius: 18,
                boxShadow: '0 16px 40px rgba(0,0,0,0.12)',
                border: '1px solid #f1f5f9',
                padding: '14px 20px 14px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                transition: 'transform 0.2s',
            }}
                onMouseOver={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
                <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: '#dcfce7',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                }}>
                    <span style={{ color: '#16a34a', fontSize: 18, fontWeight: 700 }}>✓</span>
                </div>
                <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>Calibration Passed</div>
                    <div style={{ fontSize: 12, color: '#94a3b8', marginTop: 2 }}>Certificate Auto-Emailed</div>
                </div>
            </div>

        </div>
    );
}
