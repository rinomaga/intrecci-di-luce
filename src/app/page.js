import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-page animate-fade-in">
      <section className="hero">
        <div className="hero-content">
          <h1>L'Arte dell'Intreccio</h1>
          <p>Gioielli artigianali unici, creati a mano con passione ed eleganza.</p>
          <Link href="/shop" className="btn-primary">Esplora la Collezione</Link>
        </div>
      </section>

      <section className="featured-section container">
        <div className="section-header">
          <h2>I Nostri Pezzi Unici</h2>
          <p>Scoprli le nostre ultime creazioni esclusive, realizzate con materiali pregiati.</p>
        </div>
        
        <div className="featured-grid">
          <div className="featured-item glass-panel">
            <div className="img-placeholder" style={{ backgroundImage: "url('/fotoArticoli/IMG-20260914-WA0022.jpg')" }}></div>
            <div className="item-details">
              <h3>Parure "Rugiada Smeraldo"</h3>
              <p>€ 75,00</p>
            </div>
          </div>
          <div className="featured-item glass-panel">
            <div className="img-placeholder" style={{ backgroundImage: "url('/fotoArticoli/IMG-20260914-WA0023.jpg')" }}></div>
            <div className="item-details">
              <h3>Parure "Passione Rubino"</h3>
              <p>€ 75,00</p>
            </div>
          </div>
          <div className="featured-item glass-panel">
            <div className="img-placeholder" style={{ backgroundImage: "url('/fotoArticoli/IMG-20260914-WA0021.jpg')" }}></div>
            <div className="item-details">
              <h3>Bracciale "Oceano Profondo"</h3>
              <p>€ 75,00</p>
            </div>
          </div>
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <Link href="/shop" className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--primary-color)', color: 'var(--primary-color)' }}>
            Vedi Tutto il Catalogo
          </Link>
        </div>
      </section>
    </div>
  );
}
