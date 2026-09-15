import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="container" style={{ padding: '6rem 2rem', textAlign: 'center' }}>
      <div className="glass-panel" style={{ padding: '4rem 2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>Grazie per il tuo ordine!</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Il tuo pagamento è andato a buon fine. Riceverai a breve un'email di conferma con i dettagli della spedizione.
        </p>
        <p style={{ marginBottom: '3rem', color: 'var(--text-muted)' }}>
          I nostri artigiani si metteranno subito al lavoro per preparare il tuo gioiello.
        </p>
        <Link href="/shop" className="btn-primary">
          Torna allo Shop
        </Link>
      </div>
    </div>
  );
}
