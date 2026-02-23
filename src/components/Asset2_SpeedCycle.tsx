'use client';
import React from 'react';

export default function Asset2_SpeedCycle() {
    return (
        <div style={{ position: 'relative', width: '100%', maxWidth: 520, height: 420, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* BASE CARD: PM Checklist */}
            <div style={{
                position: 'relative', zIndex: 10,
                width: '90%',
                background: '#fff',
                borderRadius: 28,
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                border: '1px solid #f1f5f9',
                padding: 24,
            }}>
                <div style={{ fontWeight: 700, color: '#1e293b', fontSize: 17, marginBottom: 18 }}>PM Checklist: Infant Warmer</div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                        { done: true, label: 'Temp Probe Accuracy' },
                        { done: true, label: 'Heater Output Test' },
                        { done: false, label: 'Safety Alarm Check' },
                    ].map((item, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: 12,
                            background: '#f8fafc', padding: '10px 12px', borderRadius: 10,
                            opacity: item.done ? 1 : 0.5,
                        }}>
                            <span style={{ color: item.done ? '#22c55e' : '#94a3b8', fontWeight: 700 }}>✓</span>
                            <span style={{ fontSize: 14, color: item.done ? '#475569' : '#94a3b8', fontWeight: 500 }}>{item.label}</span>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: 20, height: 8, width: '100%', background: '#f1f5f9', borderRadius: 999, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '67%', background: '#3b82f6', borderRadius: 999 }} />
                </div>
            </div>

            {/* FLOATING BADGE: Invoice */}
            <div style={{
                position: 'absolute', top: 0, right: -8, zIndex: 20,
                width: 190,
                background: 'linear-gradient(135deg, #2dd4bf 0%, #059669 100%)',
                borderRadius: 20,
                boxShadow: '0 20px 40px -10px rgba(16,185,129,0.4)',
                padding: 18,
                transform: 'rotate(12deg)',
                transition: 'transform 0.3s ease',
                border: '1px solid rgba(167,243,208,0.5)',
                overflow: 'hidden',
            }}
                onMouseOver={e => (e.currentTarget.style.transform = 'rotate(6deg)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'rotate(12deg)')}
            >
                {/* Glare */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)', borderRadius: 20, pointerEvents: 'none' }} />

                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>Invoice Status</div>
                <div style={{ color: '#fff', fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', marginBottom: 18 }}>PAID</div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color: '#fff' }}>
                    <div>
                        <div style={{ fontSize: 11, opacity: 0.8, marginBottom: 2 }}>Amount</div>
                        <div style={{ fontWeight: 700, fontSize: 15 }}>$450.00</div>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.3)', padding: 10, borderRadius: '50%', fontSize: 18 }}>💰</div>
                </div>
            </div>
        </div>
    );
}
