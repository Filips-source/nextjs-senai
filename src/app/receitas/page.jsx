"use client";

import { useEffect, useState } from "react";
import CardReceita from "@/components/cardReceita";
import "./receitas.css";

export default function Receitas() {
    const [receitas, setReceitas] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(false);

    useEffect(() => {
        async function buscarReceitas() {
            try {
                const resposta = await fetch("https://dummyjson.com/recipes");
                if (!resposta.ok) throw new Error("Falha na requisição");
                const dados = await resposta.json();
                setReceitas(dados.recipes);
            } catch {
                setErro(true);
            } finally {
                setCarregando(false);
            }
        }

        buscarReceitas();
    }, []);

    return (
        <main className="receitas-page">
            <h1 className="receitas-titulo">Receitas</h1>
            <p className="receitas-subtitulo">
                Escolha uma receita para ver ingredientes e modo de preparo.
            </p>

            {carregando && <p className="receitas-aviso">Carregando receitas...</p>}
            {erro && (
                <p className="receitas-aviso">
                    Não foi possível carregar as receitas. Tente novamente em instantes.
                </p>
            )}

            {receitas.length > 0 && (
                <div className="receitas-grid">
                    {receitas.map((r) => (
                        <CardReceita
                            key={r.id}
                            id={r.id}
                            titulo={r.name}
                            imagem={r.image}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}
