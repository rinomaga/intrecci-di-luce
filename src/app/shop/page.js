import { query } from '@/lib/db';
import Link from 'next/link';
import CheckoutButton from './CheckoutButton';
import ImageSlider from './ImageSlider';

export const dynamic = 'force-dynamic';

export default async function Shop() {
  let prodotti = [];
  let dbError = false;

  try {
    prodotti = await query('SELECT * FROM prodotti ORDER BY id DESC');
  } catch (error) {
    console.error("Errore di connessione al DB:", error);
    dbError = true;
    
    // Fallback data
    prodotti = [
      { id: 1, nome: 'Bracciale "Oceano Profondo" (Blu)', prezzo: '75.00', immagine_url: '/fotoArticoli/IMG-20260914-WA0021.jpg' },
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
          <div key={prodotto.id} className="featured-item glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <ImageSlider images={[prodotto.immagine_url, prodotto.immagine_url_2, prodotto.immagine_url_3, prodotto.immagine_url_4]} />
            <div className="item-details" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3>{prodotto.nome}</h3>
              {prodotto.descrizione && (
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0.5rem 0 1rem 0', lineHeight: '1.4', flex: 1 }}>
                  {prodotto.descrizione}
                </p>
              )}
              <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>€ {parseFloat(prodotto.prezzo).toFixed(2).replace('.', ',')}</p>
              
              <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem', flexDirection: 'column' }}>
                {prodotto.disponibile === 1 || prodotto.disponibile === true ? (
                  <CheckoutButton product={prodotto} />
                ) : (
                  <div style={{ padding: '10px 0', background: 'rgba(255,0,0,0.1)', color: '#f87171', border: '1px solid rgba(255,0,0,0.3)', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    Esaurito
                  </div>
                )}
                <Link href={`/shop/${prodotto.id}`} className="btn-primary" style={{ background: 'transparent', color: 'var(--primary-color)', border: '1px solid var(--primary-color)', textAlign: 'center' }}>
                  Dettagli
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
