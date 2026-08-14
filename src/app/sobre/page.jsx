import Link from "next/link";
import "./sobre.css";


const tituloDaPagina = "Sobre este projeto";
const textoDaPagina =
  "Este site foi construído com o Next.js (App Router)";

const listaDeValores = [
  { titulo: "Simplicidade", texto: "Código organizado e mais facil de entender :D" },
  { titulo: "Consistência", texto: "As páginas compartilham o mesmo cabeçalho, rodapé e estilo visual." },
  { titulo: "Flexibilidade", texto: "Textos, cores e imagens ficam em variáveis fáceis de encontrar e editar." },
];

export default function Sobre() {
  return (
    <main>
      <section className="sobreHeroi">
        <div className="contentor">
          <span className="selo" style={{ background: "rgba(18,184,134,0.12)", color: "var(--cor-principal)" }}>
            Sobre
          </span>
          <h1 className="titulo-secao">{tituloDaPagina}</h1>
          <p>{textoDaPagina}</p>
        </div>
      </section>

      <section className="secao">
        <div className="contentor">
          <div className="gradeValores">
            {listaDeValores.map((valor) => (
              <div key={valor.titulo} className="cartao">
                <h3 className="titulo-secao" style={{ fontSize: "1.15rem" }}>{valor.titulo}</h3>
                <p style={{ color: "var(--cor-texto-suave)", margin: 0 }}>{valor.texto}</p>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 40 }}>
            Quer saber mais sobre a empresa usada como exemplo?{" "}
            <Link href="/sobre/empresa" style={{ color: "var(--cor-principal)", fontWeight: 700 }}>
              Veja a página da empresa →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
