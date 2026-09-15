'use client';

import { useState } from 'react';
import { updateOrderStatus } from './actions/orders';

export default function OrderStatusSelect({ orderId, initialStatus }) {
  const [loading, setLoading] = useState(false);

  async function handleChange(e) {
    const newStatus = e.target.value;
    setLoading(true);
    await updateOrderStatus(orderId, newStatus);
    setLoading(false);
  }

  const getStatusColor = (status) => {
    switch(status) {
      case 'in_attesa': return '#fef08a'; // yellow
      case 'pagato': return '#bfdbfe'; // blue
      case 'spedito': return '#86efac'; // green
      case 'rimborsato': return '#f87171'; // red
      case 'reso': return '#c084fc'; // purple
      default: return 'var(--text-color)';
    }
  };

  return (
    <select 
      defaultValue={initialStatus || 'in_attesa'}
      onChange={handleChange}
      disabled={loading}
      style={{
        padding: '6px 12px',
        borderRadius: '4px',
        border: '1px solid var(--surface-border)',
        background: 'rgba(0,0,0,0.5)',
        color: getStatusColor(initialStatus || 'in_attesa'),
        fontWeight: 'bold',
        cursor: 'pointer'
      }}
    >
      <option value="in_attesa" style={{color: 'black'}}>In Attesa</option>
      <option value="pagato" style={{color: 'black'}}>Pagato (Da Spedire)</option>
      <option value="spedito" style={{color: 'black'}}>Spedito</option>
      <option value="reso" style={{color: 'black'}}>Reso</option>
      <option value="rimborsato" style={{color: 'black'}}>Rimborsato</option>
    </select>
  );
}
