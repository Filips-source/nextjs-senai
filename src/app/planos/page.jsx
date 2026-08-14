import Link from "next/link";
import styles from "./planos.module.css";

const tituloDaPagina = "Escolha o seu plano";
const textoDaPagina = "Comece de graça e mude de plano quando quiser.";

const listaDePlanos = [
  {
    nome: "Básico",
    preco: "Grátis",
    periodo: "",
    itens: ["1 página", "Suporte por e-mail", "Atualizações básicas"],
    destaque: false,
  },
  {
    nome: "Profissional",
    preco: "R$ 49",
    periodo: "por mês",
    itens: ["Páginas ilimitadas", "Suporte prioritário", "Todas as atualizações", "Relatórios mensais"],
    destaque: true,
  },
  {
    nome: "Empresarial",
    preco: "R$ 149",
    periodo: "por mês",
    itens: ["Tudo do Profissional", "Atendimento dedicado", "Treinamento da equipe"],
    destaque: false,
  },
];

export default function Planos() {
  return (
    <main>
      <section className={styles.cabecalhoPagina}>
        <div className="contentor">
          <h1 className="titulo-secao" style={{ color: "#fff" }}>{tituloDaPagina}</h1>
          <p style={{ color: "rgba(255,255,255,0.9)" }}>{textoDaPagina}</p>
        </div>
      </section>

      <section className="secao">
        <div className="contentor">
          <div className={styles.grade}>
            {listaDePlanos.map((plano) => (
              <div
                key={plano.nome}
                className={`cartao ${styles.cartaoPlano} ${plano.destaque ? styles.cartaoPlanoDestaque : ""}`}
              >
                <h3>{plano.nome}</h3>
                <div className={styles.preco}>{plano.preco}</div>
                <div className={styles.precoPeriodo}>{plano.periodo}</div>
                <ul className={styles.listaItens}>
                  {plano.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href="/contato" className="botao-principal">
                  Escolher plano
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
