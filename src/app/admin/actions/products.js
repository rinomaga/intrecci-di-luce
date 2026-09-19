'use server';

import { query } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addProduct(formData) {
  const nome = formData.get('nome');
  const descrizione = formData.get('descrizione');
  const prezzo = parseFloat(formData.get('prezzo').replace(',', '.'));
  const immagine_url = formData.get('immagine_url') || '/fotoArticoli/placeholder.jpg';
  const immagine_url_2 = formData.get('immagine_url_2') || null;
  const immagine_url_3 = formData.get('immagine_url_3') || null;
  const immagine_url_4 = formData.get('immagine_url_4') || null;
  const disponibile = formData.get('disponibile') === 'on' ? 1 : 0;
  const in_home = formData.get('in_home') === 'on' ? 1 : 0;

  try {
    await query(
      'INSERT INTO prodotti (nome, descrizione, prezzo, immagine_url, immagine_url_2, immagine_url_3, immagine_url_4, disponibile, in_home) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [nome, descrizione, prezzo, immagine_url, immagine_url_2, immagine_url_3, immagine_url_4, disponibile, in_home]
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
  const immagine_url_2 = formData.get('immagine_url_2') || null;
  const immagine_url_3 = formData.get('immagine_url_3') || null;
  const immagine_url_4 = formData.get('immagine_url_4') || null;
  const disponibile = formData.get('disponibile') === 'on' ? 1 : 0;
  const in_home = formData.get('in_home') === 'on' ? 1 : 0;

  try {
    await query(
      'UPDATE prodotti SET nome = ?, descrizione = ?, prezzo = ?, immagine_url = ?, immagine_url_2 = ?, immagine_url_3 = ?, immagine_url_4 = ?, disponibile = ?, in_home = ? WHERE id = ?',
      [nome, descrizione, prezzo, immagine_url, immagine_url_2, immagine_url_3, immagine_url_4, disponibile, in_home, id]
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
