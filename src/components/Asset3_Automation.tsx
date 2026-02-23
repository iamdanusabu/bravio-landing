'use client';
import React from 'react';

export default function Asset3_Automation() {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: 520, height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* Connecting glow */}
            <div style={{
                position: 'absolute', top: '50%', left: '50%',
                width: 80, height: 80,
                background: '#60a5fa',
                borderRadius: '50%',
                filter: 'blur(40px)',
                opacity: 0.3,
                zIndex: 0,
                transform: 'translate(-50%,-50%)',
            }} />

            {/* BASE: Mobile phone */}
            <div style={{
                position: 'relative', zIndex: 10,
                width: 220, height: 320,
                background: '#0f172a',
                borderRadius: 30,
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                border: '4px solid #1e293b',
                padding: 12,
                overflow: 'hidden',
                transform: 'rotate(-6deg)',
            }}>
                {/* Notch */}
                <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 80, height: 16, background: '#1e293b', borderRadius: '0 0 14px 14px', zIndex: 20 }} />

                {/* Screen */}
                <div style={{ background: '#f1f5f9', width: '100%', height: '100%', borderRadius: 20, paddingTop: 28, padding: '28px 10px 10px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: '#64748b' }}>SCAN ASSET</span>
                        <span style={{ fontSize: 10, color: '#2563eb' }}>Bravio Mobile</span>
                    </div>

                    {/* Viewfinder */}
                    <div style={{ flexGrow: 1, background: '#cbd5e1', borderRadius: 14, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ position: 'absolute', width: '70%', height: '50%', border: '2px solid #3b82f6', borderRadius: 10 }} />
                        <span style={{ fontSize: 28, opacity: 0.4 }}>📷</span>
                    </div>

                    <button style={{ marginTop: 8, width: '100%', padding: '8px 0', background: '#2563eb', color: '#fff', fontSize: 11, fontWeight: 700, borderRadius: 10, border: 'none', fontFamily: 'inherit', cursor: 'pointer' }}>
                        Auto-Generate Report
                    </button>
                </div>
            </div>

            {/* FLOATING: PDF badge */}
            <div style={{
                position: 'absolute', top: 40, right: 16, zIndex: 30,
                width: 155,
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 30px 60px -12px rgba(99,102,241,0.3)',
                padding: 16,
                border: '1px solid #eef2ff',
                transform: 'rotate(3deg)',
                transition: 'transform 0.2s ease',
            }}
                onMouseOver={e => (e.currentTarget.style.transform = 'rotate(3deg) translateY(-4px)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'rotate(3deg)')}
            >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 36, height: 44, background: '#fee2e2', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#ef4444', border: '1px solid #fecaca', flexShrink: 0 }}>PDF</div>
                    <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: '#334155', lineHeight: 1.3 }}>Service Report #992.pdf</div>
                        <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 2 }}>Just now</div>
                    </div>
                </div>
                <div style={{ background: '#4f46e5', color: '#fff', fontSize: 11, fontWeight: 700, padding: '8px 10px', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                    <span>✓</span> Compliant &amp; Sent
                </div>
            </div>
        </div>
    );
}
