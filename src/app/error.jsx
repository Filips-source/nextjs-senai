'use client'

import Link from "next/link";
import styles from "./page.module.css";
import ErrorPhantom from "@/components/errorGhost"

export default function Error({ error, retry}){
    return (
        <>
        <div className="container">
            <div className="flex">
                <h2>Alguma coisa deu errado.</h2>
                <ErrorPhantom/>
            </div>
        </div>
        </>
    )
}
 