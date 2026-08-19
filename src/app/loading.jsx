import Link from "next/link";
import styles from "./page.module.css";
import LoadingSpinner from "@/components/loadersSpin"

export default function Loading(){
    return (
        <>
        <div className="container">
            <div className="flex">
                <h2>Carregando</h2>
                <LoadingSpinner/>
                        
            </div>
        </div>
        </>
    )
}