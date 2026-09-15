import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Intrecci Di Luce | Bijoux Artigianali Fatti a Mano',
  description: 'Gioielli artigianali unici, creati a mano con passione. Scopri le nostre collezioni di bracciali, orecchini e collane.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <header className="site-header glass-panel">
          <div className="container header-content">
            <Link href="/" className="logo">INTRECCI DI LUCE</Link>
            <nav className="main-nav">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/galleria">Galleria</Link>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="site-footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <h3>INTRECCI DI LUCE</h3>
              <p>Bijoux artigianali fatti a mano con amore.</p>
            </div>
            <div className="footer-social">
              <h4>Seguici</h4>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Intrecci Di Luce. Tutti i diritti riservati.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
