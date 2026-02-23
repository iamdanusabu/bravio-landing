'use client';
import React from 'react';

const bars = [40, 60, 45, 80, 55, 90, 70];

export default function Asset4_Velocity() {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: 400, height: 350, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* BASE: Team Dashboard */}
            <div style={{
                position: 'relative', zIndex: 10,
                width: '95%',
                background: '#fff',
                borderRadius: 20,
                boxShadow: '0 10px 30px rgba(0,0,0,0.07)',
                border: '1px solid #f1f5f9',
                padding: 22,
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
                    <div style={{ fontWeight: 700, color: '#1e293b', fontSize: 16 }}>Team Velocity (Today)</div>
                    <div style={{ width: 8, height: 8, background: '#22c55e', borderRadius: '50%' }} />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 16 }}>
                    {[
                        { label: 'Avg Response', value: '18 mins' },
                        { label: 'Jobs Cleared', value: '42' },
                    ].map((m, i) => (
                        <div key={i} style={{ background: '#f8fafc', padding: 14, borderRadius: 14, border: '1px solid #f1f5f9' }}>
                            <div style={{ fontSize: 11, color: '#64748b', marginBottom: 4 }}>{m.label}</div>
                            <div style={{ fontSize: 20, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em' }}>{m.value}</div>
                        </div>
                    ))}
                </div>

                {/* Bar chart */}
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 64, padding: '0 8px' }}>
                    {bars.map((h, i) => (
                        <div key={i} style={{ flex: 1, background: '#dbeafe', borderRadius: '4px 4px 0 0', position: 'relative', height: '100%' }}>
                            <div style={{ position: 'absolute', bottom: 0, width: '100%', background: '#3b82f6', borderRadius: '4px 4px 0 0', height: `${h}%`, transition: 'height 0.3s ease' }} />
                        </div>
                    ))}
                </div>
            </div>

            {/* FLOATING: Speed badge */}
            <div style={{
                position: 'absolute', top: -16, right: -16, zIndex: 30,
                width: 130, height: 130,
                background: 'linear-gradient(135deg, #f97316 0%, #f43f5e 100%)',
                borderRadius: '50%',
                boxShadow: '0 20px 40px -10px rgba(249,115,22,0.45)',
                border: '4px solid #fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transform: 'rotate(12deg)',
                transition: 'transform 0.3s ease, transform 0.3s ease',
            }}
                onMouseOver={e => (e.currentTarget.style.transform = 'rotate(12deg) scale(1.06)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'rotate(12deg) scale(1)')}
            >
                <div style={{ textAlign: 'center', color: '#fff' }}>
                    <div style={{ fontSize: 28 }}>⚡</div>
                    <div style={{ fontSize: 16, fontWeight: 900, fontStyle: 'italic', letterSpacing: '-0.04em', lineHeight: 1.1 }}>FAST<br />TRACK</div>
                    <div style={{ fontSize: 9, opacity: 0.9, textTransform: 'uppercase', fontWeight: 700, marginTop: 4 }}>Activated</div>
                </div>
            </div>
        </div>
    );
}
