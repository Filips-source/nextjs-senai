'use client';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useState } from "react";
import styles from "./ordens.module.css";

const DESCRICAO_MIN = 15;
const DESCRICAO_MAX = 100;

export default function Ordens() {
    const [ordens, setOrdens] = useState([]);

    const [cliente, setCliente] = useState("");
    const [equipamento, setEquipamento] = useState("");
    const [descricao, setDescricao] = useState("");

    const [erro, setErro] = useState("");

    const descricaoCurta = descricao.trim().length < DESCRICAO_MIN;

    function cadastrarOrdem(event) {
        event.preventDefault();

        if (
            cliente.trim() === "" ||
            equipamento.trim() === "" ||
            descricao.trim() === ""
        ) {
            setErro("Preencha todos os campos!");
            return;
        }

        if (descricaoCurta) {
            setErro(`A descrição precisa ter no mínimo ${DESCRICAO_MIN} caracteres.`);
            return;
        }

        const novaOrdem = {
            id: Date.now(),
            cliente: cliente.trim(),
            equipamento: equipamento.trim(),
            descricao: descricao.trim(),
            status: "Aberta",
        };

        setOrdens([...ordens, novaOrdem]);
        setCliente("");
        setEquipamento("");
        setDescricao("");
        setErro("");
    }

    function fecharOrdem(id) {
        setOrdens(
            ordens.map((ordem) =>
                ordem.id === id ? { ...ordem, status: "Fechada" } : ordem
            )
        );
    }

    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.titulo}>Ordens de serviço</h1>
                <p className={styles.subtitulo}>
                    Cadastre a ordem e acompanhe os atendimentos em aberto.
                </p>

                <form className={styles.card} onSubmit={cadastrarOrdem}>
                    <div className={styles.campo}>
                        <label htmlFor="cliente">Cliente</label>
                        <input
                            type="text"
                            id="cliente"
                            value={cliente}
                            placeholder="Nome do cliente"
                            onChange={(event) => setCliente(event.target.value)}
                        />
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="equipamento">Equipamento</label>
                        <input
                            type="text"
                            id="equipamento"
                            value={equipamento}
                            placeholder="Nome do equipamento"
                            onChange={(event) => setEquipamento(event.target.value)}
                        />
                    </div>

                    <div className={styles.campo}>
                        <label htmlFor="descricao">Descrição</label>
                        <textarea
                            id="descricao"
                            className={descricaoCurta && descricao !== "" ? styles.invalido : ""}
                            placeholder="Descreva o problema"
                            value={descricao}
                            maxLength={DESCRICAO_MAX}
                            onChange={(event) => setDescricao(event.target.value)}
                        />
                        <div className={styles.rodape}>
                            <span>Mínimo {DESCRICAO_MIN} caracteres</span>
                            <span className={descricaoCurta ? styles.contadorAlerta : ""}>
                                {descricao.length}/{DESCRICAO_MAX}
                            </span>
                        </div>
                    </div>

                    {erro !== "" && <p className={styles.erro}>{erro}</p>}

                    <button className={styles.botao} type="submit">
                        Cadastrar nova ordem
                    </button>
                </form>

                {ordens.length === 0 ? (
                    <p className={styles.vazio}>Nenhuma ordem cadastrada ainda.</p>
                ) : (
                    <table className={styles.tabela}>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Equipamento</th>
                                <th>Descrição</th>
                                <th>Status</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordens.map((ordem) => (
                                <tr key={ordem.id}>
                                    <td>{ordem.cliente}</td>
                                    <td>{ordem.equipamento}</td>
                                    <td>{ordem.descricao}</td>
                                    <td>
                                        <span
                                            className={`${styles.etiqueta} ${
                                                ordem.status === "Aberta"
                                                    ? styles.aberta
                                                    : styles.fechada
                                            }`}
                                        >
                                            {ordem.status}
                                        </span>
                                    </td>
                                    <td>
                                        {ordem.status === "Aberta" ? (
                                            <button
                                                className={styles.botaoFechar}
                                                type="button"
                                                onClick={() => fecharOrdem(ordem.id)}
                                            >
                                                Fechar
                                            </button>
                                        ) : (
                                            "-"
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
            <Footer />
        </>
    );
}