import Image from 'next/image';

export default function Contatti() {
  return (
    <div className="container animate-fade-in" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <Image 
        src="/logo.png" 
        alt="Chiarìa Intrecci di Luce Logo" 
        width={300} 
        height={150} 
        style={{ objectFit: 'contain', margin: '0 auto 2rem auto' }} 
        priority
      />
      
      <div className="glass-panel" style={{ padding: '3rem', marginTop: '2rem' }}>
        <h2>Contattaci</h2>
        <p style={{ margin: '1rem 0 2rem 0', color: 'var(--text-muted)' }}>
          Hai domande sui nostri bijoux o vuoi richiedere una creazione personalizzata? 
          Non esitare a contattarci, saremo felici di risponderti!
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.2rem' }}>
          <div>
            <strong>Telefono / WhatsApp:</strong>
            <p style={{ marginTop: '0.5rem', color: 'var(--primary-color)' }}>+348 0199643</p>
          </div>
          <div>
            <strong>Email:</strong>
            <p style={{ marginTop: '0.5rem', color: 'var(--primary-color)' }}>
              <a href="mailto:m.bonfiglio@chiaria.store" style={{ color: 'inherit', textDecoration: 'none' }}>
                m.bonfiglio@chiaria.store
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
