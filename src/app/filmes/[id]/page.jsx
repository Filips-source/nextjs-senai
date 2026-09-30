"use client"
import { useParams } from "next/navigation";  //pagina com o link dinâmico (slug)
import { useEffect, useState } from "react"
import dados from "@/dados.json"

export default function Filme (){
    const params = useParams(); //
    const [filme, setFilme] = useState();

    useEffect( () => {
        const filmeEncontrado = dados.find(f => f.id == params.id);
        setFilme(filmeEncontrado);
    })

    return (
        <main>

        {filme && <>
        
            <h1>{filme.titulo}</h1>
            <ul>
                <li>Ano: {Filme.ano}</li>
                <li>Sinópse: {filme.sinopse}</li>
                <li>Gênero: {Filme.genero}</li>
                <li>Imagem: {filme.imagem}</li>
            </ul>

        </>}

        </main>
    )
}