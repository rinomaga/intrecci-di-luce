import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ProductForm from '../ProductForm';

export const dynamic = 'force-dynamic';

export default async function NuovoProdottoPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_auth')?.value === 'true';

  if (!isAuthenticated) {
    redirect('/admin');
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Aggiungi Nuovo Prodotto</h1>
        <p style={{ color: 'var(--text-muted)' }}>Compila i campi qui sotto per inserire un nuovo gioiello nel catalogo.</p>
      </div>

      <div className="glass-panel" style={{ padding: '2rem' }}>
        <ProductForm product={null} />
      </div>
    </div>
  );
}
