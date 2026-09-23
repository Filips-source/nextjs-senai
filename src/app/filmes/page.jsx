"use client"
import { useEffect, useState } from "react"

export default function Filmes(){
    const [filmes, setFilmes] = useState([]);
    
    return(
        <main>
            <h2>Listagem de todos os filmes</h2>
            {filmes.length > 0 &&
                <div>
                    {filmes.map(f => {
                        return(
                            <div key={f.id}>

                            </div>    
                        )
                    })}
                </div>
            }
        </main>
    )
}