'use server';

import { query } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

async function saveImageFile(file) {
  if (!file || typeof file === 'string' || file.size === 0) {
    return null;
  }
  
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  
  const ext = path.extname(file.name) || '.jpg';
  const filename = `img-${Date.now()}-${Math.round(Math.random() * 10000)}${ext}`;
  
  const uploadDir = path.join(process.cwd(), 'public', 'fotoArticoli');
  const filepath = path.join(uploadDir, filename);
  
  await fs.mkdir(uploadDir, { recursive: true });
  await fs.writeFile(filepath, buffer);
  
  return `/fotoArticoli/${filename}`;
}

export async function addProduct(formData) {
  const nome = formData.get('nome');
  const descrizione = formData.get('descrizione');
  const prezzo = parseFloat(formData.get('prezzo').replace(',', '.'));
  
  let immagine_url = await saveImageFile(formData.get('file_immagine_url'));
  if (!immagine_url) {
    immagine_url = formData.get('immagine_url') || '/fotoArticoli/placeholder.jpg';
  }

  let immagine_url_2 = await saveImageFile(formData.get('file_immagine_url_2'));
  if (!immagine_url_2) {
    immagine_url_2 = formData.get('immagine_url_2') || null;
  }

  let immagine_url_3 = await saveImageFile(formData.get('file_immagine_url_3'));
  if (!immagine_url_3) {
    immagine_url_3 = formData.get('immagine_url_3') || null;
  }

  let immagine_url_4 = await saveImageFile(formData.get('file_immagine_url_4'));
  if (!immagine_url_4) {
    immagine_url_4 = formData.get('immagine_url_4') || null;
  }

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
  
  let immagine_url = await saveImageFile(formData.get('file_immagine_url'));
  if (!immagine_url) {
    immagine_url = formData.get('immagine_url');
  }

  let immagine_url_2 = await saveImageFile(formData.get('file_immagine_url_2'));
  if (!immagine_url_2) {
    immagine_url_2 = formData.get('immagine_url_2') || null;
  }

  let immagine_url_3 = await saveImageFile(formData.get('file_immagine_url_3'));
  if (!immagine_url_3) {
    immagine_url_3 = formData.get('immagine_url_3') || null;
  }

  let immagine_url_4 = await saveImageFile(formData.get('file_immagine_url_4'));
  if (!immagine_url_4) {
    immagine_url_4 = formData.get('immagine_url_4') || null;
  }

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
