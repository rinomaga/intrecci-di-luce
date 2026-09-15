import { query } from '@/lib/db';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Shop() {
  let prodotti = [];
  let dbError = false;

  try {
    prodotti = await query('SELECT * FROM prodotti WHERE disponibile = 1');
  } catch (error) {
    console.error("Errore di connessione al DB:", error);
    dbError = true;
    
    // Fallback data in caso il DB non sia ancora configurato/raggiungibile
    prodotti = [
      { id: 1, nome: 'Bracciale "Oceano Profondo" (Blu)', prezzo: '75.00', immagine_url: '/fotoArticoli/IMG-20260914-WA0021.jpg' },
      { id: 2, nome: 'Parure "Rugiada Smeraldo" (Verde + Oro)', prezzo: '75.00', immagine_url: '/fotoArticoli/IMG-20260914-WA0022.jpg' },
      { id: 3, nome: 'Parure "Passione Rubino" (Rosso + Oro)', prezzo: '75.00', immagine_url: '/fotoArticoli/IMG-20260914-WA0023.jpg' },
      { id: 4, nome: 'Orecchini "Cerchi di Giada" (Nero + Verde)', prezzo: '75.00', immagine_url: '/fotoArticoli/IMG-20260914-WA0024.jpg' },
      { id: 5, nome: 'Collana "Bagliori di Fuoco" (Rosso + Oro)', prezzo: '75.00', immagine_url: '/fotoArticoli/IMG-20260914-WA0025.jpg' },
    ];
  }

  return (
    <div className="shop-page container animate-fade-in" style={{ padding: '4rem 2rem' }}>
      <div className="section-header">
        <h1>La Nostra Collezione</h1>
        <p>Scopri l'intera gamma di gioielli artigianali. Spedizione in 10 giorni lavorativi.</p>
      </div>

      {dbError && (
        <div style={{ background: 'rgba(255, 0, 0, 0.1)', border: '1px solid red', padding: '1rem', marginBottom: '2rem', borderRadius: '8px', color: '#ffaaaa', textAlign: 'center' }}>
          Attenzione: Database non connesso. Mostrando catalogo di base.
        </div>
      )}

      <div className="featured-grid">
        {prodotti.map(prodotto => (
          <div key={prodotto.id} className="featured-item glass-panel">
            <div className="img-placeholder" style={{ backgroundImage: `url('${prodotto.immagine_url}')` }}></div>
            <div className="item-details">
              <h3>{prodotto.nome}</h3>
              <p>€ {parseFloat(prodotto.prezzo).toFixed(2).replace('.', ',')}</p>
              <button className="btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Acquista Ora</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
