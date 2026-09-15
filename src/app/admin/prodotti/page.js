import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { query } from '@/lib/db';
import AdminNav from '../AdminNav';
import ProductListActions from './ProductListActions';

export const dynamic = 'force-dynamic';

export default async function AdminProdottiPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_auth')?.value === 'true';

  if (!isAuthenticated) {
    redirect('/admin');
  }

  let prodotti = [];
  try {
    prodotti = await query('SELECT * FROM prodotti ORDER BY id DESC');
  } catch (e) {
    console.error("Errore recupero prodotti", e);
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <h1>Gestione Prodotti</h1>
      <p style={{ marginBottom: '2rem' }}>Aggiungi, modifica o disabilita i gioielli nel tuo catalogo.</p>

      <AdminNav />

      <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Catalogo</h2>
        <Link href="/admin/prodotti/nuovo" className="btn-primary">
          + Nuovo Prodotto
        </Link>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', overflowX: 'auto' }}>
        {prodotti.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>Nessun prodotto nel catalogo.</p>
        ) : (
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse', minWidth: '600px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                <th style={{ padding: '1rem 0' }}>ID</th>
                <th style={{ padding: '1rem 0' }}>Immagine</th>
                <th style={{ padding: '1rem 0' }}>Nome</th>
                <th style={{ padding: '1rem 0' }}>Prezzo</th>
                <th style={{ padding: '1rem 0' }}>Stato</th>
                <th style={{ padding: '1rem 0', textAlign: 'right' }}>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {prodotti.map(prodotto => (
                <tr key={prodotto.id} style={{ borderBottom: '1px solid var(--surface-border)' }}>
                  <td style={{ padding: '1rem 0' }}>{prodotto.id}</td>
                  <td style={{ padding: '1rem 0' }}>
                    <div style={{ width: '50px', height: '50px', backgroundImage: `url('${prodotto.immagine_url}')`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '4px' }}></div>
                  </td>
                  <td style={{ padding: '1rem 0' }}>{prodotto.nome}</td>
                  <td style={{ padding: '1rem 0' }}>€ {parseFloat(prodotto.prezzo).toFixed(2).replace('.', ',')}</td>
                  <td style={{ padding: '1rem 0' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '12px', 
                      fontSize: '0.8rem',
                      background: prodotto.disponibile ? 'rgba(0, 255, 0, 0.1)' : 'rgba(255, 0, 0, 0.1)',
                      color: prodotto.disponibile ? '#4ade80' : '#f87171'
                    }}>
                      {prodotto.disponibile ? 'Disponibile' : 'Esaurito'}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 0', textAlign: 'right' }}>
                    <Link href={`/admin/prodotti/${prodotto.id}`} style={{ marginRight: '1rem', color: 'var(--primary-color)', textDecoration: 'none' }}>
                      Modifica
                    </Link>
                    <ProductListActions id={prodotto.id} isAvailable={prodotto.disponibile} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
