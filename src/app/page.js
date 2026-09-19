import Image from 'next/image';
import Link from 'next/link';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let prodottiInHome = [];
  try {
    prodottiInHome = await query('SELECT * FROM prodotti WHERE in_home = 1');
  } catch (e) {
    console.error("Errore DB per prodotti in home", e);
  }

  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <Image src="/logo.png" alt="Chiarìa Intrecci di Luce" width={600} height={250} style={{ objectFit: 'contain', margin: '0 auto 1rem auto', display: 'block', maxWidth: '100%', height: 'auto' }} priority />
          <p>Portiamo Luce ai Tuoi Dettagli</p>
        </div>
      </section>

      {/* Chi Siamo & Progetto */}
      <section id="chi-siamo" className="section-padding container about-section">
        <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>CHI SIAMO</h2>
        <p>
          Siamo due sorelle unite da un legame profondo e da una passione instancabile per il fatto a mano. Cresciute coltivando il culto per il gusto in tutte le sue declinazioni, abbiamo trovato nell'arte dell'uncinetto il nostro linguaggio d'elezione. Le nostre mani si muovono tra trame e intrecci, trasformando filati scelti con cura in forme che celebrano la bellezza e l'armonia. Chiarìa nasce proprio da questa sinergia quotidiana: un dialogo continuo tra sorelle, dove la pazienza della lavorazione artigianale si fonde con la ricerca costante dell'eleganza estetica.
        </p>

        <div id="progetto" style={{marginTop: '4rem'}}>
          <h2 className="section-title" style={{textAlign: 'left', marginBottom: '2rem'}}>IL NOSTRO PROGETTO</h2>
          <p>
            In Sicilia, la chiarìa è quel chiarore diffuso e nitido che squarcia il buio, come la luce lunare che all'improvviso illumina la notte e svela i contorni del mondo. Questo è il cuore della nostra filosofia. Vogliamo portare alla luce l'eleganza dei dettagli, creando accessori che non siano semplici ornamenti, ma veri e propri punti luce in grado di far brillare chi li indossa. Ogni nostro pezzo è un intreccio di luce: un inno alla luminosità, alla grazia e all'esclusività di un oggetto ideato e realizzato interamente a mano, nodo dopo nodo.
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

      {/* Prodotti e Categorie */}
      <section id="prodotti" className="section-padding container">
        <div style={{textAlign: 'center', marginBottom: '4rem'}}>
          <h3 style={{fontFamily: 'var(--font-sans)', color: 'var(--text-color)', fontSize: '1.2rem', letterSpacing: '0.1em', marginBottom: '0.5rem'}}>COSA PUOI TROVARE</h3>
          <p style={{maxWidth: '800px', margin: '1.5rem auto 3rem', color: 'var(--text-muted)'}}>
            Entrare nel mondo di Chiarìa significa scoprire un laboratorio dove la tradizione artigianale incontra lo stile contemporaneo. Qui il tempo rallenta per dare spazio alla cura minuziosa del dettaglio. Esploriamo accostamenti cromatici e giochi di trasparenze, intrecciando filati sottili a cristalli e pietre sfaccettate per catturare ogni singolo riflesso di luce. Troverai un'eleganza sussurrata ma di forte impatto, pensata per chi cerca un'alternativa autentica e ricca di carattere rispetto agli accessori realizzati in serie.
          </p>
          <h2 className="section-title" style={{marginBottom: 0}}>LE NOSTRE ANIME</h2>
        </div>
        
        <div className="products-grid" style={{marginBottom: '5rem'}}>
          <div className="product-card">
            <div className="product-img" style={{ backgroundImage: "url('/fotoArticoli/IMG-20260914-WA0022.jpg')" }}></div>
            <h3>Bijoux Artigianali</h3>
            <p>
              Orecchini, collane, bracciali e pendenti progettati per vibrare di luce. Minuziosi intrecci abbracciano e incastonano piccole pietre luminose e cristalli, creando composizioni flessuose, leggere e delicate che incorniciano il viso con assoluta raffinatezza.
            </p>
          </div>
          <div className="product-card">
            <div className="product-img" style={{ backgroundImage: "url('/fotoArticoli/IMG-20260914-WA0021.jpg')" }}></div>
            <h3>Borse Gioiello (Sciccheria)</h3>
            <p>
              Piccoli scrigni di stile, strutturati e lavorati interamente all'uncinetto. Ogni borsa è una vera e propria sciccheria curata in ogni singolo millimetro, dai manici alle rifiniture interne, fino alle nappe decorative intrecciate a mano.
            </p>
          </div>
        </div>

        {prodottiInHome.length > 0 && (
          <>
            <div style={{textAlign: 'center', marginBottom: '4rem'}}>
              <h2 className="section-title" style={{marginBottom: 0}}>IN EVIDENZA</h2>
            </div>
            <div className="products-grid">
              {prodottiInHome.map(p => (
                <div key={p.id} className="product-card">
                  <div className="product-img" style={{ backgroundImage: `url('${p.immagine_url}')` }}></div>
                  <h3>{p.nome}</h3>
                  <p>{p.descrizione}</p>
                  <Link href="/shop" className="btn-primary" style={{marginTop: '1.5rem'}}>Scopri di più</Link>
                </div>
              ))}
            </div>
          </>
        )}
        <div style={{textAlign: 'center', marginTop: '3rem'}}>
          <Link href="/shop" className="btn-primary" style={{background: 'transparent', color: 'var(--primary-color)'}}>Visita lo Shop Completo</Link>
        </div>
      </section>

    </div>
  );
}
