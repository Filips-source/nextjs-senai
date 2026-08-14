import styles from "./recursos.module.css";

const tituloDaPagina = "Recursos";
const textoDaPagina = "Conheça os principais recursos disponíveis neste projeto.";

const listaDeRecursos = [
  { icone: "", titulo: "Roteamento por arquivos", texto: "Cada pasta dentro de src/app vira uma página do site, automaticamente." },
  { icone: "", titulo: "Navegação com o componente Link", texto: "As trocas de página acontecem sem recarregar tudo, deixando a navegação mais rápida." },
  { icone: "", titulo: "Layout compartilhado", texto: "Cabeçalho e rodapé ficam em layout.js e aparecem em todas as páginas." },
  { icone: "", titulo: "Textos em variáveis", texto: "Título, descrição e listas ficam no topo de cada arquivo, fáceis de editar." },
];

export default function Recursos() {
  return (
    <main>
      <section className={styles.cabecalhoPagina}>
        <div className="contentor">
          <h1 className="titulo-secao">{tituloDaPagina}</h1>
          <p style={{ color: "var(--cor-texto-suave)", maxWidth: 560, margin: "0 auto" }}>
            {textoDaPagina}
          </p>
        </div>
      </section>

      <section className="secao">
        <div className="contentor">
          <div className={styles.grade}>
            {listaDeRecursos.map((recurso) => (
              <div key={recurso.titulo} className="cartao">
                <div className={styles.iconeGrande}>{recurso.icone}</div>
                <h3 style={{ margin: "0 0 8px" }}>{recurso.titulo}</h3>
                <p style={{ color: "var(--cor-texto-suave)", margin: 0 }}>{recurso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
