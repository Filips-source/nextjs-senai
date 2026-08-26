import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import NoticiasDoBlog from "@/components/cardBlog";
import "./blog.css"

export default function BlogPage() {
    const noticiasBlog = [
    {
        id: 1,
        titulo: "Inteligência Artificial transforma o mercado de trabalho",
        descricao: "Ferramentas de IA estão automatizando tarefas, aumentando a produtividade e criando novas oportunidades em diversas áreas.",
        categoria: "Tecnologia",
        imagem: "/imagens/IAtransforma.png",
        data: "26/08/2026"
    },
    {
        id: 2,
        titulo: "Novas tecnologias prometem computadores mais rápidos",
        descricao: "Novos processadores e componentes prometem aumentar significativamente o desempenho dos computadores nos próximos anos.",
        categoria: "Tecnologia",
        imagem: "/imagens/IAnovatech.png",
        data: "25/08/2026"
    },
    {
        id: 3,
        titulo: "Games continuam crescendo no mercado mundial",
        descricao: "A indústria de jogos eletrônicos continua crescendo e conquistando novos jogadores ao redor do mundo.",
        categoria: "Games",
        imagem: "/imagens/IAgamescnt.png",
        data: "24/08/2026"
    },
    {
        id: 4,
        titulo: "Brasil recebe novos investimentos em tecnologia",
        descricao: "Empresas anunciam novos investimentos no setor tecnológico brasileiro, fortalecendo o mercado nacional.",
        categoria: "Economia",
        imagem: "/imagens/IAbrasilrcb.png",
        data: "23/08/2026"
    },
    {
        id: 5,
        titulo: "Redes sociais ganham novas ferramentas de segurança",
        descricao: "Plataformas digitais estão implementando novos recursos para proteger usuários contra golpes e ameaças virtuais.",
        categoria: "Internet",
        imagem: "/imagens/IAredesSoc.png",
        data: "22/08/2026"
    },
    {
        id: 6,
        titulo: "Celulares dobráveis ganham espaço no mercado",
        descricao: "Novos modelos de smartphones dobráveis chegam ao mercado com telas maiores e tecnologias inovadoras.",
        categoria: "Tecnologia",
        imagem: "/imagens/IAcelularesDob.png",
        data: "21/08/2026"
    },
    {
        id: 7,
        titulo: "Cientistas desenvolvem novas soluções sustentáveis",
        descricao: "Pesquisadores apresentam alternativas tecnológicas para reduzir impactos ambientais e promover a sustentabilidade.",
        categoria: "Ciência",
        imagem: "/imagens/IAcientista.png",
        data: "20/08/2026"
    },
    {
        id: 8,
        titulo: "Computação em nuvem facilita o trabalho das empresas",
        descricao: "Serviços em nuvem oferecem mais flexibilidade, segurança e praticidade para empresas de diferentes setores.",
        categoria: "Tecnologia",
        imagem: "/imagens/IAnuvem.png",
        data: "19/08/2026"
    },
    {
        id: 9,
        titulo: "Mercado de jogos recebe novos lançamentos",
        descricao: "Grandes títulos chegam ao mercado e prometem conquistar os jogadores com novos gráficos e experiências.",
        categoria: "Games",
        imagem: "/imagens/IAmercado.png",
        data: "18/08/2026"
    },
    {
        id: 10,
        titulo: "Segurança digital se torna prioridade para empresas",
        descricao: "Com o aumento das ameaças virtuais, empresas estão investindo cada vez mais na proteção de seus dados e sistemas.",
        categoria: "Cibersegurança",
        imagem: "/imagens/IAseguranca.png",
        data: "17/08/2026"
    }
];

    return (
        <>
            <Header />
            <div className="blog-header">
                <h1 className="blog-title">Noticias do mês</h1>
            </div>
            <div className="card-container">

            {noticiasBlog.map((noticia) => (
                <NoticiasDoBlog
                key={noticia.id}
                titulo={noticia.titulo}
                descricao={noticia.descricao}
                categoria={noticia.categoria}
                data={noticia.data}
                imagem={noticia.imagem}
                />
            ))}
            </div>
            <Footer />
        </>
    );
}

