import Link from "next/link";
import "./cardReceita.css";

// Componente do card: mostra apenas título, foto e o link "Saiba mais"
export default function CardReceita({ id, titulo, imagem }) {
    return (
        <article className="card-receita">
            <img src={imagem} alt={titulo} />
            <div className="card-receita-corpo">
                <h3>{titulo}</h3>
                <Link href={`/receitas/${id}`}>Saiba mais...</Link>
            </div>
        </article>
    );
}
