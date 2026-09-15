'use client';

import { useState } from 'react';
import { toggleProductAvailability } from '../actions/products';

export default function ProductListActions({ id, isAvailable }) {
  const [loading, setLoading] = useState(false);

  async function handleToggle() {
    setLoading(true);
    await toggleProductAvailability(id, isAvailable);
    setLoading(false);
  }

  return (
    <button 
      onClick={handleToggle} 
      disabled={loading}
      style={{
        background: 'transparent',
        border: '1px solid var(--surface-border)',
        color: 'var(--text-color)',
        padding: '6px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '0.9rem'
      }}
    >
      {loading ? '...' : (isAvailable ? 'Segna Esaurito' : 'Segna Disponibile')}
    </button>
  );
}
