'use server';

import nodemailer from 'nodemailer';

export async function sendContactEmail(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    return { success: false, error: 'Tutti i campi sono obbligatori.' };
  }

  // Use environment variables for SMTP configuration, or a fallback for testing
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.ethereal.email',
    port: process.env.SMTP_PORT || 587,
    auth: {
      user: process.env.SMTP_USER || 'ethereal_user',
      pass: process.env.SMTP_PASS || 'ethereal_pass',
    },
  });

  try {
    await transporter.sendMail({
      from: `"Modulo Contatti Sito" <${process.env.SMTP_FROM || 'no-reply@chiaria.store'}>`,
      to: 'm.bonfiglio@chiaria.store, melaniabonfilio78@gmail.com',
      subject: `Nuova richiesta di contatto da ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`,
      html: `
        <h3>Nuova richiesta di contatto</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Si è verificato un errore durante l\'invio del messaggio. Riprova più tardi.' };
  }
}
