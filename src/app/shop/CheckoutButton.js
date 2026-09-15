'use client';

import { useState } from 'react';

export default function CheckoutButton({ product }) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product.id,
          productName: product.nome,
          productPrice: product.prezzo,
          imageUrl: product.immagine_url
        })
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Errore durante il checkout.");
      }
    } catch (e) {
      console.error(e);
      alert("Errore di connessione.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button onClick={handleCheckout} className="btn-primary" style={{ marginTop: '1rem', width: '100%' }} disabled={loading}>
      {loading ? 'Elaborazione...' : 'Acquista Ora'}
    </button>
  );
}
