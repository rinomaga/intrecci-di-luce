'use server';

import { query } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addProduct(formData) {
  const nome = formData.get('nome');
  const descrizione = formData.get('descrizione');
  const prezzo = parseFloat(formData.get('prezzo').replace(',', '.'));
  const immagine_url = formData.get('immagine_url') || '/fotoArticoli/placeholder.jpg';
  const disponibile = formData.get('disponibile') === 'on' ? 1 : 0;

  try {
    await query(
      'INSERT INTO prodotti (nome, descrizione, prezzo, immagine_url, disponibile) VALUES (?, ?, ?, ?, ?)',
      [nome, descrizione, prezzo, immagine_url, disponibile]
    );
    revalidatePath('/shop');
    revalidatePath('/admin/prodotti');
    return { success: true };
  } catch (error) {
    console.error("Error adding product:", error);
    return { success: false, error: 'Errore durante l\'inserimento del prodotto.' };
  }
}

export async function updateProduct(id, formData) {
  const nome = formData.get('nome');
  const descrizione = formData.get('descrizione');
  const prezzo = parseFloat(formData.get('prezzo').replace(',', '.'));
  const immagine_url = formData.get('immagine_url');
  const disponibile = formData.get('disponibile') === 'on' ? 1 : 0;

  try {
    await query(
      'UPDATE prodotti SET nome = ?, descrizione = ?, prezzo = ?, immagine_url = ?, disponibile = ? WHERE id = ?',
      [nome, descrizione, prezzo, immagine_url, disponibile, id]
    );
    revalidatePath('/shop');
    revalidatePath('/admin/prodotti');
    return { success: true };
  } catch (error) {
    console.error("Error updating product:", error);
    return { success: false, error: 'Errore durante l\'aggiornamento del prodotto.' };
  }
}

export async function toggleProductAvailability(id, currentStatus) {
  const newStatus = currentStatus ? 0 : 1;
  try {
    await query('UPDATE prodotti SET disponibile = ? WHERE id = ?', [newStatus, id]);
    revalidatePath('/shop');
    revalidatePath('/admin/prodotti');
    return { success: true };
  } catch (error) {
    console.error("Error toggling product status:", error);
    return { success: false };
  }
}
