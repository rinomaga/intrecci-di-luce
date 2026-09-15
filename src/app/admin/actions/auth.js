'use server';

import { cookies } from 'next/headers';

export async function login(formData) {
  const password = formData.get('password');
  const adminPassword = process.env.ADMIN_PASSWORD || 'intrecciadmin2026';

  if (password === adminPassword) {
    (await cookies()).set('admin_auth', 'true', { secure: true, httpOnly: true, path: '/' });
    return { success: true };
  }
  
  return { success: false, error: 'Password errata' };
}

export async function logout() {
  (await cookies()).delete('admin_auth');
}
