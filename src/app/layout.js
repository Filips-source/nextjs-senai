import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./page.module.css"
import Image from 'next/image';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Primeira aplicação next.js",
  description: "Aprendendo ecossistema react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="site-header">
          <div className="brand">
            <Image src="/imagens/imagembounce.png" alt="Unbounce" width={100} height={50} />
          </div>
          <nav className="site-nav" aria-label="Menu principal">
            <Link href="/sobre">sobre</Link>
            <Link href="/sobre/empresa">sobre empresa</Link>
            <Link href="/">pagina inicial</Link>
          </nav>
        </header>
        {children}
      <footer className={styles.footer}>
        marca da agua vc coloca ai se quiser dane se, footer é aqui
        </footer>
      </body>
    </html>
  );
}
