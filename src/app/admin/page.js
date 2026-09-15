import { cookies } from 'next/headers';
import LoginForm from './LoginForm';
import AdminNav from './AdminNav';
import OrderStatusSelect from './OrderStatusSelect';
import { query } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('admin_auth')?.value === 'true';

  if (!isAuthenticated) {
    return (
      <div className="container" style={{ padding: '6rem 2rem', maxWidth: '500px' }}>
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
          <h2>Accesso Admin</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Inserisci la password per accedere al pannello di controllo.</p>
          <LoginForm />
        </div>
      </div>
    );
  }

  // Dashboard content
  let ordini = [];
  try {
    ordini = await query('SELECT * FROM ordini ORDER BY creato_il DESC LIMIT 20');
  } catch (e) {
    console.error("Errore recupero ordini", e);
  }

  return (
    <div className="container" style={{ padding: '4rem 2rem' }}>
      <h1>Dashboard Amministratore</h1>
      <p style={{ marginBottom: '2rem' }}>Benvenuto nel pannello di controllo di Intrecci Di Luce.</p>
      
      <AdminNav />

      <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h3>Ultimi Ordini</h3>
        {ordini.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>Nessun ordine trovato.</p>
        ) : (
          <table style={{ width: '100%', textAlign: 'left', marginTop: '1rem', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--surface-border)' }}>
                <th style={{ padding: '1rem 0' }}>ID</th>
                <th style={{ padding: '1rem 0' }}>Cliente</th>
                <th style={{ padding: '1rem 0' }}>Email</th>
                <th style={{ padding: '1rem 0' }}>Totale</th>
                <th style={{ padding: '1rem 0' }}>Stato</th>
              </tr>
            </thead>
            <tbody>
              {ordini.map(ordine => (
                <tr key={ordine.id} style={{ borderBottom: '1px solid var(--surface-border)' }}>
                  <td style={{ padding: '1rem 0' }}>{ordine.id}</td>
                  <td style={{ padding: '1rem 0' }}>{ordine.nome_cliente}</td>
                  <td style={{ padding: '1rem 0' }}>{ordine.email_cliente}</td>
                  <td style={{ padding: '1rem 0' }}>€ {parseFloat(ordine.totale).toFixed(2)}</td>
                  <td style={{ padding: '1rem 0' }}>
                    <OrderStatusSelect orderId={ordine.id} initialStatus={ordine.stato} />
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
