"use client";

import { useEffect, useState } from "react";
import UserCard from "@/components/userCard";
import styles from "./usersSection.module.css";

const usuariosPersonalizados = [
    { nome: "Filipe Dupin", email: "Filipedupin6767@dummyjson.com", empresa: "Porsche" },
    { nome: "Gabriel Araújo", email: "Gabrielaraujo2891@dummyjson.com", empresa: "Pagani" },
    { nome: "Luiz Fillipe", email: "Luizfillipe4523@dummyjson.com", empresa: "Ferrari" },
    { nome: "Heitor Magnani", email: "Heitormagnani7310@dummyjson.com", empresa: "Porsche" },
    { nome: "Rodrigo Rodrigues", email: "Rodrigorodrigues9048@dummyjson.com", empresa: "Pagani" },
];

export default function UsersSection() {
    const [usuarios, setUsuarios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function buscarUsuarios() {
            try {
                const resposta = await fetch("https://dummyjson.com/users?limit=5");

                if (!resposta.ok) {
                    throw new Error("Não foi possível carregar os usuários.");
                }

                const dados = await resposta.json();

                const usuariosCombinados = dados.users.map((usuario, indice) => ({
                    id: usuario.id,
                    foto: usuario.image,
                    idade: usuario.age,
                    telefone: usuario.phone,
                    ...usuariosPersonalizados[indice],
                }));

                setUsuarios(usuariosCombinados);
            } catch (erroCapturado) {
                setErro(erroCapturado.message);
            } finally {
                setCarregando(false);
            }
        }

        buscarUsuarios();
    }, []);

    return (
        <section className={styles.secao}>
            <div className="contentor">
                <h2 className="titulo-secao">Usuários</h2>

                {carregando && <p className={styles.status}>Carregando usuários...</p>}

                {!carregando && erro !== "" && (
                    <p className={`${styles.status} ${styles.statusErro}`}>{erro}</p>
                )}

                {!carregando && erro === "" && (
                    <div className={styles.grade}>
                        {usuarios.map((usuario) => (
                            <UserCard key={usuario.id} {...usuario} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
