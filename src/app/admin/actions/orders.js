'use server';

import { query } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function updateOrderStatus(id, newStatus) {
  try {
    await query('UPDATE ordini SET stato = ? WHERE id = ?', [newStatus, id]);
    revalidatePath('/admin');
    revalidatePath(`/admin/ordini/${id}`);
    return { success: true };
  } catch (error) {
    console.error("Error updating order status:", error);
    return { success: false, error: 'Errore durante l\'aggiornamento dello stato dell\'ordine.' };
  }
}
