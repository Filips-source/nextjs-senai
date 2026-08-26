import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CardProduto from "@/components/cardProduto";
import "./produtos.css"

export default function ProdutosPage() {
    const listaProdutos = [
        {
            id: 1,
            titulo: "Notebook ideapad Gaming",
            descricao: "Um notebook gamer para seus melhores jogos",
            imagem: "/imagens/ideapad.png",
            preco: 3999.0,
        },
        {
            id: 2,
            titulo: "Monitor",
            descricao: "180hz HDR e IPS perfeito para jogar",
            imagem: "/imagens/monitor.png",
            preco: 987.2,
        },
        {
            id: 3,
            titulo: "Mouse MX Logitech",
            descricao: "Tecnologia de ponta para sua experiencia",
            imagem: "/imagens/mouse.png",
            preco: 687.0,
        },
        {
            id: 4,
            titulo: "Teclado Wouting",
            descricao: "Teclado 0 delay, sem input lag para trabalhar e jogar",
            imagem: "/imagens/teclado.png",
            preco: 1700.0,
        },
    ];

    return (
        <>
            <Header />
            <main className="produtos-page">
                <div className="produtos-header">
                    <h1 className="produtos-title">Listagem de produtos</h1>
                </div>
                <div className="produtos-grid">
                    {listaProdutos.map((produto) => (
                        <CardProduto
                            key={produto.id}
                            titulo={produto.titulo}
                            descricao={produto.descricao}
                            imagem={produto.imagem}
                            preco={produto.preco}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}

