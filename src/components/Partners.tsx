export default function Partners() {
    const partners = [
        "MedEquip Biomedicals", "BioTech ISE",
        "HealthCare Biomedical", "Nexus Biomedical",
    ];

    return (
        <section style={{ padding: '60px 0', borderBottom: '1px solid #eee' }}>
            <div className="container">
                <h3 style={{ textAlign: 'center', fontSize: 14, color: '#888', marginBottom: 40, textTransform: 'uppercase', letterSpacing: 1 }}>
                    Trusted by leading biomedical service organizations nationwide
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40, opacity: 0.6 }}>
                    {partners.map(p => (
                        <span key={p} style={{ fontSize: 20, fontWeight: 700 }}>{p}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}
