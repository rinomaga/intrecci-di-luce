import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>BENVENUTI IN CHIARÌA</h1>
          <p>Portiamo Luce ai Tuoi Dettagli</p>
        </div>
      </section>

      {/* Chi Siamo & Progetto */}
      <section id="chi-siamo" className="section-padding container about-section">
        <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>CHI SIAMO</h2>
        <p>
          La Chiarìa siciliana è un accessorio artigianale di lusso, dove l'uncinetto si eleva a forma d'arte, 
          portando la luce e l'autenticità di Chiarìa nei cuori e nella vita di donne in tutto il mondo. 
          Creiamo con passione ed eleganza per offrirti un pezzo unico e prezioso.
        </p>

        <div id="progetto" style={{marginTop: '4rem'}}>
          <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>IL NOSTRO PROGETTO</h2>
          <p>
            Il nostro progetto nasce dall'amore per l'artigianato e dalla volontà di creare accessori
            di riferimento nel mondo del lusso fatto a mano. Ogni creazione all'uncinetto è studiata 
            nei minimi dettagli per esaltare la femminilità.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Valori */}
      <section id="valori" className="section-padding container">
        <h2 className="section-title">LA NOSTRA MISSION, VISION E VALORI</h2>
        
        <div className="mvv-grid">
          
          <div className="mvv-col">
            <h3 style={{color: 'var(--text-color)'}}>MISSION</h3>
            <div className="mvv-icon">
              {/* Placeholder for icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h4 style={{fontFamily: 'var(--font-serif)', color: 'var(--primary-color)'}}>CREARE LUCE</h4>
            <p>
              Creare con cura e dedizione accessori unici all'uncinetto, cristalli e pietre luminose, 
              per offrire a chi li indossa un tocco di luce, eleganza e autenticità quotidiana.
            </p>
          </div>

          <div className="mvv-col">
            <h3 style={{color: 'var(--text-color)'}}>VISION</h3>
            <div className="mvv-icon">
              {/* Placeholder for icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <h4 style={{fontFamily: 'var(--font-serif)', color: 'var(--primary-color)'}}>ARTE DI NICCHIA</h4>
            <p>
              Diventare un punto di riferimento nell'accessorio artigianale di lusso, dove l'uncinetto 
              si eleva a forma d'arte, portando la luce e l'autenticità di Chiarìa nei cuori e nello stile 
              di donne in tutto il mondo.
            </p>
          </div>

          <div className="mvv-col">
            <h3 style={{color: 'var(--text-color)'}}>VALORI</h3>
            <div className="mvv-icon">
              {/* Placeholder for icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </div>
            <h4 style={{fontFamily: 'var(--font-serif)', color: 'var(--primary-color)'}}>I NOSTRI PILASTRI</h4>
            <ul className="valori-list">
              <li>
                <span style={{color: 'var(--primary-color)'}}>✓</span>
                <div><strong>ARTIGIANALITÀ AUTENTICA</strong> Ogni pezzo è unico e fatto a mano.</div>
              </li>
              <li>
                <span style={{color: 'var(--primary-color)'}}>✓</span>
                <div><strong>SINERGIA FAMILIARE</strong> Il legame tra sorelle è il cuore del laboratorio.</div>
              </li>
              <li>
                <span style={{color: 'var(--primary-color)'}}>✓</span>
                <div><strong>CURA DEL DETTAGLIO</strong> Perfezionismo in ogni nodo e castone.</div>
              </li>
              <li>
                <span style={{color: 'var(--primary-color)'}}>✓</span>
                <div><strong>LUCE E TRASPARENZE</strong> Diffondono luce ed eleganza.</div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Prodotti */}
      <section id="prodotti" className="section-padding container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h3 style={{fontFamily: 'var(--font-sans)', color: 'var(--text-color)', fontSize: '1.2rem', letterSpacing: '0.1em', marginBottom: '0.5rem'}}>COSA PUOI TROVARE</h3>
          <h2 className="section-title" style={{marginBottom: 0}}>I NOSTRI PRODOTTI</h2>
        </div>
        
        <div className="products-grid">
          
          <div className="product-card">
            <div className="product-img" style={{ backgroundImage: "url('/fotoArticoli/IMG-20260914-WA0022.jpg')" }}></div>
            <h3>Bijoux</h3>
            <p>
              Borse gioiello cucite a mano dove l'uncinetto si intreccia a luminosi cristalli e pietre preziose, 
              per un tocco di classe senza tempo.
            </p>
            <Link href="/shop" className="btn-primary" style={{marginTop: '1.5rem'}}>Scopri i Bijoux</Link>
          </div>

          <div className="product-card">
            <div className="product-img" style={{ backgroundImage: "url('/fotoArticoli/IMG-20260914-WA0021.jpg')" }}></div>
            <h3>Sciccheria</h3>
            <p>
              La nostra linea esclusiva di accessori. L'artigianato si sposa con l'eleganza per 
              creare oggetti di puro fascino.
            </p>
            <Link href="/shop" className="btn-primary" style={{marginTop: '1.5rem'}}>Scopri Sciccheria</Link>
          </div>

        </div>
      </section>

    </div>
  );
}
