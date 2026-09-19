import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Charìa Bijoux | Bijoux Artigianali Fatti a Mano',
  description: 'Gioielli artigianali unici, creati a mano con passione. Scopri le nostre collezioni di bracciali, orecchini e collane.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <header className="site-header glass-panel">
          <div className="container header-content">
            <Link href="/" className="logo">
              <Image src="/logo.jpeg" alt="Charìa Bijoux" width={180} height={90} style={{ objectFit: 'contain' }} priority />
            </Link>
            <nav className="main-nav">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/galleria">Galleria</Link>
              <Link href="/contatti">Contatti</Link>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="site-footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <Image src="/logo.jpeg" alt="Charìa Bijoux" width={140} height={70} style={{ objectFit: 'contain', marginBottom: '1rem' }} />
              <p>Bijoux artigianali fatti a mano con amore.</p>
            </div>
            <div className="footer-contact">
              <h4>Contatti</h4>
              <p>📞 +348 0199643</p>
              <p>✉️ melaniabonfiglio78@gmail.com</p>
            </div>
            <div className="footer-social">
              <h4>Seguici</h4>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Charìa Bijoux. Tutti i diritti riservati.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
