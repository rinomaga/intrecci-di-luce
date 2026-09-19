'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addProduct, updateProduct } from '../actions/products';
import Link from 'next/link';

export default function ProductForm({ product }) {
  const isEditing = !!product;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.target);
    let result;

    if (isEditing) {
      result = await updateProduct(product.id, formData);
    } else {
      result = await addProduct(formData);
    }

    if (result.success) {
      router.push('/admin/prodotti');
    } else {
      setError(result.error || 'Errore sconosciuto');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
      
      {error && <div style={{ color: '#ffaaaa', padding: '1rem', border: '1px solid #ffaaaa', borderRadius: '4px' }}>{error}</div>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>Nome Gioiello</label>
        <input 
          type="text" 
          name="nome" 
          defaultValue={product?.nome || ''} 
          required 
          style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>Descrizione</label>
        <textarea 
          name="descrizione" 
          defaultValue={product?.descrizione || ''} 
          required 
          rows="4"
          style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>Prezzo (€)</label>
        <input 
          type="text" 
          name="prezzo" 
          defaultValue={product ? parseFloat(product.prezzo).toFixed(2) : ''} 
          required 
          placeholder="75.00"
          style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>URL Immagine Principale (1)</label>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          Inserisci il link pubblico dell'immagine o il percorso locale.
        </p>
        <input 
          type="text" 
          name="immagine_url" 
          defaultValue={product?.immagine_url || ''} 
          required 
          style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>URL Immagine (2) - Opzionale</label>
        <input 
          type="text" 
          name="immagine_url_2" 
          defaultValue={product?.immagine_url_2 || ''} 
          style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>URL Immagine (3) - Opzionale</label>
        <input 
          type="text" 
          name="immagine_url_3" 
          defaultValue={product?.immagine_url_3 || ''} 
          style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <label>URL Immagine (4) - Opzionale</label>
        <input 
          type="text" 
          name="immagine_url_4" 
          defaultValue={product?.immagine_url_4 || ''} 
          style={{ padding: '0.8rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', color: 'white', borderRadius: '4px' }}
        />
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <input 
          type="checkbox" 
          name="disponibile" 
          id="disponibile"
          defaultChecked={product ? product.disponibile === 1 : true} 
          style={{ width: '20px', height: '20px' }}
        />
        <label htmlFor="disponibile">Prodotto Disponibile (acquistabile)</label>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <input 
          type="checkbox" 
          name="in_home" 
          id="in_home"
          defaultChecked={product ? product.in_home === 1 : false} 
          style={{ width: '20px', height: '20px' }}
        />
        <label htmlFor="in_home">Mostra in Home Page (In Evidenza)</label>
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Salvataggio...' : 'Salva Prodotto'}
        </button>
        <Link href="/admin/prodotti" style={{ padding: '12px 24px', border: '1px solid var(--surface-border)', color: 'white', textDecoration: 'none', borderRadius: '4px', textAlign: 'center' }}>
          Annulla
        </Link>
      </div>
    </form>
  );
}
