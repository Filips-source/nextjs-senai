import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Unbounce",
  description: "Aprendendo o roteamento do Next.js (App Router)",
};

const nomeDaMarca = "Unbounce";

const linksDoMenu = [
  { texto: "Início", endereco: "/" },
  { texto: "Sobre", endereco: "/sobre" },
  { texto: "Recursos", endereco: "/recursos" },
  { texto: "Planos", endereco: "/planos" },
];

export default function RootLayout({ children }) {
  const anoAtual = new Date().getFullYear();

  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            {nomeDaMarca.split(" ")[0]} <span>{nomeDaMarca.split(" ").slice(1).join(" ")}</span>
          </Link>

          <nav className="site-nav" aria-label="Menu principal">
            {linksDoMenu.map((link) => (
              <Link key={link.endereco} href={link.endereco}>
                {link.texto}
              </Link>
            ))}
            <Link href="/contato" className="botao-nav">
              Contato
            </Link>
          </nav>
        </header>

        {children}

        <footer className="site-footer">
          <span className="marca-rodape">{nomeDaMarca}</span>
          <nav>
            {linksDoMenu.map((link) => (
              <Link key={link.endereco} href={link.endereco}>
                {link.texto}
              </Link>
            ))}
          </nav>
          <span>© {anoAtual} {nomeDaMarca}. Todos os direitos reservados.</span>
        </footer>
      </body>
    </html>
  );
}
