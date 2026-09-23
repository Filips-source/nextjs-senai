import "./userCard.css";

export default function UserCard({ foto, nome, email, idade, telefone, empresa }) {
    return (
        <div className="user-card">
            <img className="user-card__foto" src={foto} alt={`Foto de ${nome}`} />

            <h2 className="user-card__nome">{nome}</h2>

            <ul className="user-card__lista">
                <li>
                    <strong>Email:</strong> {email}
                </li>
                <li>
                    <strong>Idade:</strong> {idade} anos
                </li>
                <li>
                    <strong>Telefone:</strong> {telefone}
                </li>
                <li>
                    <strong>Empresa:</strong> {empresa}
                </li>
            </ul>
        </div>
    );
}
