"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // pega o slug da URL (/receitas/[id])
import Link from "next/link";
import "./receita.css";

const dificuldades = { Easy: "Fácil", Medium: "Média", Hard: "Difícil" };

export default function Receita() {
    const params = useParams();
    const [receita, setReceita] = useState(null);
    const [carregando, setCarregando] = useState(true);
    const [naoEncontrada, setNaoEncontrada] = useState(false);

    useEffect(() => {
        async function buscarReceita() {
            try {
                const resposta = await fetch(`https://dummyjson.com/recipes/${params.id}`);
                if (!resposta.ok) throw new Error("Receita não encontrada");
                setReceita(await resposta.json());
            } catch {
                setNaoEncontrada(true);
            } finally {
                setCarregando(false);
            }
        }

        buscarReceita();
    }, [params.id]);

    return (
        <main className="receita-page">
            <Link href="/receitas" className="receita-voltar">
                Voltar para receitas
            </Link>

            {carregando && <p className="receita-aviso">Carregando receita...</p>}
            {naoEncontrada && (
                <p className="receita-aviso">
                    Receita não encontrada. Volte à lista e escolha outra.
                </p>
            )}

            {receita && (
                <>
                    {/* 1. titulo  2. imagem */}
                    <section className="receita-topo">
                        <img src={receita.image} alt={receita.name} />

                        <div className="receita-resumo">
                            <h1>{receita.name}</h1>

                            {/* 3 a 10: demais propriedades */}
                            <dl className="receita-info">
                                <div>
                                    <dt>Tempo de preparo</dt>
                                    <dd>{receita.prepTimeMinutes} min</dd>
                                </div>
                                <div>
                                    <dt>Tempo de cozimento</dt>
                                    <dd>{receita.cookTimeMinutes} min</dd>
                                </div>
                                <div>
                                    <dt>Porções</dt>
                                    <dd>{receita.servings}</dd>
                                </div>
                                <div>
                                    <dt>Dificuldade</dt>
                                    <dd>{dificuldades[receita.difficulty] ?? receita.difficulty}</dd>
                                </div>
                                <div>
                                    <dt>Culinária</dt>
                                    <dd>{receita.cuisine}</dd>
                                </div>
                                <div>
                                    <dt>Calorias por porção</dt>
                                    <dd>{receita.caloriesPerServing} kcal</dd>
                                </div>
                            </dl>
                        </div>
                    </section>

                    <section className="receita-detalhes">
                        <div className="receita-bloco">
                            <h2>Ingredientes</h2>
                            <ul className="receita-ingredientes">
                                {receita.ingredients.map((ingrediente, i) => (
                                    <li key={i}>{ingrediente}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="receita-bloco">
                            <h2>Modo de preparo</h2>
                            <ol className="receita-preparo">
                                {receita.instructions.map((passo, i) => (
                                    <li key={i}>{passo}</li>
                                ))}
                            </ol>
                        </div>
                    </section>
                </>
            )}
        </main>
    );
}
