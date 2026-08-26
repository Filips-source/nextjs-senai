import "./cardBlog.css"

export default function CardPostBlog({ titulo, descricao, categoria, data, imagem}) {
    return (
        <div className="card-wrap">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <img src={imagem} alt={titulo} />
            <p>Categoria: <b>{categoria}</b></p>
        </div>
    );
}
