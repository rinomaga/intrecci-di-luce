'use client';

import { useState } from 'react';
import Image from 'next/image';
import { sendContactEmail } from '../actions/contact';

export default function Contatti() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const formData = new FormData(e.target);
    const result = await sendContactEmail(formData);

    setLoading(false);
    
    if (result.success) {
      setSuccess(true);
      e.target.reset();
    } else {
      setError(result.error || 'Errore durante l\'invio del messaggio.');
    }
  }

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
          Compila il modulo sottostante per inviarci un messaggio.
        </p>

        {success && (
          <div style={{ padding: '1rem', marginBottom: '2rem', backgroundColor: 'rgba(0, 255, 0, 0.1)', border: '1px solid #4ade80', borderRadius: '4px', color: '#4ade80' }}>
            Il tuo messaggio è stato inviato con successo! Ti risponderemo al più presto.
          </div>
        )}

        {error && (
          <div style={{ padding: '1rem', marginBottom: '2rem', backgroundColor: 'rgba(255, 0, 0, 0.1)', border: '1px solid #f87171', borderRadius: '4px', color: '#f87171' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name">Nome completo</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              required 
              style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email">La tua Email</label>
            <input 
              type="email" 
              id="email"
              name="email" 
              required 
              style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message">Messaggio</label>
            <textarea 
              id="message"
              name="message" 
              required 
              rows="5"
              style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px', resize: 'vertical' }}
            />
          </div>

          <button type="submit" className="btn-primary" disabled={loading} style={{ alignSelf: 'flex-start', padding: '1rem 2rem' }}>
            {loading ? 'Invio in corso...' : 'Invia Messaggio'}
          </button>
        </form>

        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--surface-border)', display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.2rem', textAlign: 'center' }}>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>Oppure contattaci telefonicamente o su WhatsApp:</p>
            <p style={{ marginTop: '0.5rem', color: 'var(--primary-color)', fontWeight: 'bold' }}>+39 348 0199643</p>
          </div>
        </div>
      </div>
    </div>
  );
}
