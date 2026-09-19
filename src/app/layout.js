import './globals.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Chiarìa Intrecci di Luce',
  description: 'Gioielli artigianali unici, creati a mano con passione. Scopri le nostre collezioni di bijoux e sciccheria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <header className="site-header">
          <div className="container header-content">
            <Link href="/" className="logo">
              <Image src="/Logo_Frame.jpg" alt="Chiarìa Intrecci di Luce" width={180} height={90} style={{ objectFit: 'contain' }} priority />
            </Link>
            <nav className="main-nav">
              <Link href="/#chi-siamo">CHI SIAMO</Link>
              <Link href="/#progetto">IL NOSTRO PROGETTO</Link>
              <Link href="/#valori">I NOSTRI VALORI</Link>
              <Link href="/#prodotti">PRODOTTI</Link>
              <Link href="/contatti">CONTATTI</Link>
            </nav>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="site-footer">
          <div className="container footer-content">
            <div className="footer-left">
              <h4 style={{fontFamily: 'var(--font-serif)', marginBottom: '1rem', color: 'var(--primary-color)', fontSize: '1.2rem', letterSpacing: '0.1em'}}>Contattaci</h4>
              <p>📞 +39 348 0199643</p>
              <a href="mailto:melaniabonfiglio78@gmail.com">✉️ melaniabonfiglio78@gmail.com</a>
              <a href="https://www.chiariabijoux.it" style={{marginTop: '0.5rem', display: 'inline-block'}}>www.chiariabijoux.it</a>
            </div>
            <div className="footer-center">
              <Image src="/logo.png" alt="Chiarìa Intrecci di Luce" width={140} height={70} style={{ objectFit: 'contain' }} />
            </div>
            <div className="footer-right">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">chiaria.bijoux</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">chiaria.com</a>
              <div className="social-links">
                {/* SVG Icons or Emojis for now */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{fontSize: '1.5rem'}}>📷</a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{fontSize: '1.5rem'}}>📘</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Chiarìa Intrecci di Luce. Tutti i diritti riservati.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
