import Link from "next/link";
import styles from "./page.module.css";
import NotFoundBuddy from "@/components/not-found-buddy"

export default function NotFound() {
    return (
        <>
        <div className="container">
            <div className="flex">
            <h1>Conteúdo não encontrado</h1>
            <p>Error 404</p>
            <NotFoundBuddy className="mascoste"/>
            <Link href={"/"}>Clique aqui para voltar</Link>
            
            </div>
        </div>
        </>
    )
}
