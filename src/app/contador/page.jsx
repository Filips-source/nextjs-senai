'use client';
import Header from "@/components/header";
import Footer from "@/components/footer";

import { useState } from "react";

export default function Contador(){
    
    const [contador, setContador] = useState(0);

    function addUmContador(){
        setContador((valorAtual) => Math.min(valorAtual + 1, 100));
    }

    function subUmContador(){
        setContador((valorAtual) => Math.max(valorAtual - 1, -5));
    }
    
    return(
        <>
            <h1>Dev</h1>
            <p> {contador} </p>
            {contador === 100 && <p style={{color: "red"}}> Ja deu o Limite maximo irmão para ae 100!</p>}

            {contador === -5 && <p style={{color: "blue"}}> Ja deu o Limite minimo para ae -5!</p>}
            <div style={{display: "flex", gap: "10px"}}>
                <button type="button" onClick={addUmContador}> + </button>
                <button type="button" onClick={subUmContador}> - </button>
            </div>
        </>
    )
}
