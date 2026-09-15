export default function Galleria() {
  return (
    <div className="galleria-page container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <div className="section-header">
        <h1>Galleria & Social</h1>
        <p>Scopri il processo creativo e guarda i nostri gioielli indossati.</p>
      </div>

      <div className="social-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          Seguici su Instagram
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#000', color: '#fff', border: '1px solid #333' }}>
          Scopri i nostri TikTok
        </a>
      </div>

      <div className="media-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
        <img src="/fotoArticoli/IMG-20260914-WA0026.jpg" alt="Dietro le quinte" className="glass-panel" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
        <img src="/fotoArticoli/IMG-20260914-WA0027.jpg" alt="Dettaglio gioiello" className="glass-panel" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
        <img src="/fotoArticoli/IMG-20260914-WA0022.jpg" alt="Parure" className="glass-panel" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
        <img src="/fotoArticoli/IMG-20260914-WA0024.jpg" alt="Orecchini" className="glass-panel" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '12px' }} />
      </div>
    </div>
  );
}
