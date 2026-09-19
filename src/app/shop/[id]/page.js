import { query } from '@/lib/db';
import Link from 'next/link';
import ImageSlider from '../ImageSlider';
import CheckoutButton from '../CheckoutButton';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function ProductDetail({ params }) {
  const { id } = await params;
  
  let prodotto = null;

  try {
    const risultati = await query('SELECT * FROM prodotti WHERE id = ?', [id]);
    if (risultati.length > 0) {
      prodotto = risultati[0];
    }
  } catch (error) {
    console.error("Errore DB:", error);
    // Fallback data if DB not connected
    if (id === '1') prodotto = { id: 1, nome: 'Bracciale "Oceano Profondo" (Blu)', prezzo: '75.00', immagine_url: '/fotoArticoli/IMG-20260914-WA0021.jpg', descrizione: 'Un intreccio delicato...', disponibile: 1 };
  }

  if (!prodotto) {
    notFound();
  }

  const images = [
    prodotto.immagine_url,
    prodotto.immagine_url_2,
    prodotto.immagine_url_3,
    prodotto.immagine_url_4
  ].filter(img => img && img.trim() !== '');

  return (
    <div className="container section-padding animate-fade-in" style={{ maxWidth: '1000px' }}>
      
      <div style={{ marginBottom: '2rem' }}>
        <Link href="/shop" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>&#10094;</span> Torna alla collezione
        </Link>
      </div>

      <div className="product-detail-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
        
        {/* Gallery Section */}
        <div className="glass-panel" style={{ padding: '1rem' }}>
          <ImageSlider images={images} />
        </div>

        {/* Details Section */}
        <div>
          <h1 style={{ color: 'var(--primary-color)', fontSize: '2.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>
            {prodotto.nome}
          </h1>
          
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            € {parseFloat(prodotto.prezzo).toFixed(2).replace('.', ',')}
          </p>

          <div style={{ marginBottom: '2.5rem', lineHeight: '1.8', color: 'var(--text-color)', fontSize: '1.1rem' }}>
            {prodotto.descrizione || "Nessuna descrizione disponibile per questo prodotto."}
          </div>

          <div style={{ borderTop: '1px solid var(--surface-border)', paddingTop: '2rem' }}>
            {prodotto.disponibile === 1 || prodotto.disponibile === true ? (
              <CheckoutButton product={prodotto} />
            ) : (
              <div style={{ padding: '15px 0', background: 'rgba(255,0,0,0.1)', color: '#f87171', border: '1px solid rgba(255,0,0,0.3)', borderRadius: '4px', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1.1rem' }}>
                Attualmente Esaurito
              </div>
            )}
          </div>
          
          <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            <p>✓ Spedizione artigianale in 10 giorni lavorativi.</p>
            <p>✓ Fatto a mano in Sicilia con materiali di alta qualità.</p>
            <p>✓ Pagamento sicuro con Stripe.</p>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

    </div>
  );
}
