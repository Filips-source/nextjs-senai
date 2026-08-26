import "./cardProduto.css"

export default function CardProduto({ titulo, descricao, imagem, preco }) {
    return (
        <div className="card-wrap">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <img src={imagem} alt={titulo} />
            <p>Preço: <b>{preco}</b></p>
        </div>
    );
}
