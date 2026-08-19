import Link from "next/link";
import styles from "./page.module.css";
import { resolve } from "styled-jsx/css";

const tituloPrincipal = "O cara que mais comeu Pudim no mundo todo";
const textoDeApoio =
  "Aprenda a burlar o Senai para acessar o Pudim.com.br.";
const textoBotaoPrincipal = "Começar agora";
const linkBotaoPrincipal = "/contato";
const textoBotaoSecundario = "Ver planos";
const linkBotaoSecundario = "/planos";

const fotoDeFundoHeroi = "/imagens/foto-fundo-heroi.png";
  
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home() {

  await sleep(3500);

  /* throw new Error("Erro simulado!!!") */
  
  return (
    <main>
      <section
        className={styles.heroi}
        style={{ "--foto-fundo-heroi": `url(${fotoDeFundoHeroi})` }}
      >
        <div className="contentor">
          <div className={styles.heroiConteudo}>
            <span className="selo">Landing page incrivel WOW, Pudim!!!</span>
            <h1 className={styles.tituloHeroi}>{tituloPrincipal}</h1>
            <p className={styles.textoHeroi}>{textoDeApoio}</p>
            <div className={styles.botoesHeroi}>
              <Link href={linkBotaoPrincipal} className="botao-principal">
                {textoBotaoPrincipal}
              </Link>
              <Link
                href={linkBotaoSecundario}
                className="botao-secundario"
                style={{ color: "#ffffff" }}
              >
                {textoBotaoSecundario}
              </Link>
            </div>
          </div>
        </div>
      </section>
  
      <section className={styles.faixaFinal}>
        <div className="contentor">
          <h2 className="titulo-secao">Pronto para começar?</h2>
          <p className={styles.faixaFinalTexto}>
            Fale com a gente e veja como este projeto pode se encaixar no que
            você precisa.
          </p>
          <Link href="/contato" className="botao-principal">
            Falar com a gente
          </Link>
        </div>
      </section>
    </main>
  );
}
