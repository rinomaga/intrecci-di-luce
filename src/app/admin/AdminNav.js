'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
      <Link 
        href="/admin" 
        style={{ 
          color: pathname === '/admin' ? 'var(--primary-color)' : 'var(--text-color)',
          fontWeight: pathname === '/admin' ? 'bold' : 'normal',
          textDecoration: 'none'
        }}
      >
        Ordini
      </Link>
      <Link 
        href="/admin/prodotti" 
        style={{ 
          color: pathname.includes('/admin/prodotti') ? 'var(--primary-color)' : 'var(--text-color)',
          fontWeight: pathname.includes('/admin/prodotti') ? 'bold' : 'normal',
          textDecoration: 'none'
        }}
      >
        Catalogo Prodotti
      </Link>
    </nav>
  );
}
