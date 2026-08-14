import styles from "./contato.module.css";

const tituloDaPagina = "Fale com a gente";
const textoDaPagina = "Preencha o formulário abaixo e retornaremos em breve.";

export default function Contato() {
  return (
    <main>
      <section className={styles.cabecalhoPagina}>
        <div className="contentor">
          <h1 className="titulo-secao">{tituloDaPagina}</h1>
          <p style={{ color: "var(--cor-texto-suave)", maxWidth: 520, margin: "0 auto" }}>
            {textoDaPagina}
          </p>
        </div>
      </section>

      <section className="secao">
        <div className="contentor">
          
          <form className={styles.formulario}>
            <div className={styles.campo}>
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" placeholder="Seu nome completo" />
            </div>

            <div className={styles.campo}>
              <label htmlFor="email">E-mail</label>
              <input id="email" name="email" type="email" placeholder="voce@exemplo.com" />
            </div>

            <div className={styles.campo}>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem aqui" />
            </div>

            <button type="submit" className={`botao-principal ${styles.botaoEnviar}`}>
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
