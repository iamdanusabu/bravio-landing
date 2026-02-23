'use client';
import React from 'react';

export default function HeroDashboardAsset() {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: 440, margin: '0 auto' }}>

            {/* MAIN CHECKOUT CARD */}
            <div style={{
                background: '#fff',
                borderRadius: 28,
                padding: 32,
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                border: '1px solid #f1f5f9',
                position: 'relative',
                zIndex: 10,
                width: '88%',
            }}>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
                    <div style={{
                        width: 48, height: 48,
                        background: '#2563eb',
                        borderRadius: 14,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', fontWeight: 700, fontSize: 20,
                        boxShadow: '0 4px 12px rgba(37,99,235,0.35)',
                        flexShrink: 0,
                    }}>B</div>
                    <div>
                        <div style={{ fontWeight: 600, color: '#1e293b', fontSize: 17 }}>City General Hospital</div>
                        <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>ap@citygeneral.com</div>
                    </div>
                </div>

                {/* Invoice Info */}
                <div style={{
                    border: '1px solid #e2e8f0',
                    borderRadius: 18,
                    padding: '24px',
                    marginBottom: 24,
                    background: 'rgba(248,250,252,0.5)',
                }}>
                    <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 600, marginBottom: 4 }}>PM Invoice #8402</div>
                    <div style={{ fontSize: 38, fontWeight: 800, color: '#0f172a', marginBottom: 6, letterSpacing: '-0.04em' }}>$3,450.00</div>
                    <div style={{ fontSize: 13, color: '#94a3b8' }}>February 23, 2026</div>
                </div>

                {/* Payment Methods */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                    {/* Selected */}
                    <div style={{
                        border: '2px solid #0d9488',
                        borderRadius: 14,
                        padding: '14px 16px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        background: 'rgba(20,184,166,0.05)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{ fontSize: 18 }}>💳</span>
                            <span style={{ fontWeight: 600, color: '#1e293b', fontSize: 14 }}>Credit Card</span>
                        </div>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', border: '4px solid #0d9488' }} />
                    </div>

                    {/* Unselected */}
                    <div style={{
                        border: '1px solid #e2e8f0',
                        borderRadius: 14,
                        padding: '14px 16px',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <span style={{ fontSize: 18 }}>🏛️</span>
                            <span style={{ fontWeight: 500, color: '#64748b', fontSize: 14 }}>ACH Transfer</span>
                        </div>
                        <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid #e2e8f0' }} />
                    </div>
                </div>

                {/* Pay Button */}
                <button style={{
                    width: '100%',
                    background: '#0f172a',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 15,
                    padding: '16px 0',
                    borderRadius: 14,
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    transition: 'background 0.2s',
                }}
                    onMouseOver={e => (e.currentTarget.style.background = '#1e293b')}
                    onMouseOut={e => (e.currentTarget.style.background = '#0f172a')}
                >
                    Process Payment
                </button>
            </div>

            {/* FLOATING CREDIT CARD */}
            <div style={{
                position: 'absolute',
                top: 28,
                right: -36,
                zIndex: 20,
                width: 220,
                height: 300,
                background: 'linear-gradient(135deg, #14b8a6 0%, #1e293b 100%)',
                borderRadius: 20,
                boxShadow: '0 30px 60px rgba(0,0,0,0.25)',
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transform: 'rotate(2deg)',
                transition: 'transform 0.3s ease',
            }}
                onMouseOver={e => (e.currentTarget.style.transform = 'rotate(0deg)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'rotate(2deg)')}
            >
                <div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Corporate Card</div>
                    <div style={{ color: '#fff', fontWeight: 600, letterSpacing: '0.18em', fontSize: 16 }}>4242 **** ****</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: 26, fontStyle: 'italic', letterSpacing: '-0.04em' }}>VISA</div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 20, transform: 'scale(1.4)', marginRight: 4 }}>)))</div>
                </div>
            </div>

        </div>
    );
}
