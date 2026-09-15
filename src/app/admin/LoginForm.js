'use client';

import { useState } from 'react';
import { login } from './actions/auth';

export default function LoginForm() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const formData = new FormData(e.target);
    const result = await login(formData);
    
    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else {
      // Refresh to update server component
      window.location.reload();
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        required
        style={{ 
          padding: '12px', 
          background: 'rgba(0,0,0,0.5)', 
          border: '1px solid var(--surface-border)',
          color: 'var(--text-color)',
          borderRadius: '4px'
        }}
      />
      {error && <p style={{ color: '#ffaaaa', fontSize: '0.9rem' }}>{error}</p>}
      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? 'Accesso...' : 'Entra'}
      </button>
    </form>
  );
}
