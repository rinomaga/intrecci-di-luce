import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { query } from '@/lib/db';
import ProductForm from '../ProductForm';

export const dynamic = 'force-dynamic';

export default async function ModificaProdottoPage({ params }) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_auth')?.value === 'true';

  if (!isAuthenticated) {
    redirect('/admin');
  }
  
  // params in Next.js 15 app router is a promise!
  const resolvedParams = await params;
  const id = resolvedParams.id;

  let prodotti = [];
  try {
    prodotti = await query('SELECT * FROM prodotti WHERE id = ?', [id]);
  } catch (error) {
    console.error("Errore recupero prodotto:", error);
  }

  const prodotto = prodotti[0];

  if (!prodotto) {
    return (
      <div className="container" style={{ padding: '4rem 2rem' }}>
        <h1>Prodotto non trovato</h1>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Modifica Prodotto</h1>
        <p style={{ color: 'var(--text-muted)' }}>Stai modificando il gioiello: <strong>{prodotto.nome}</strong></p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <ProductForm product={prodotto} />
      </div>
    </div>
  );
}
