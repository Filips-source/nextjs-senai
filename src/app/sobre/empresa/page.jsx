import styles from "./empresa.module.css";
import Image from 'next/image';
export default function empresa(){
    return(
    <>
        <main className={styles.content}>
      <section className={styles.card}>
        <h1>A Chevrolet foi fundada em 3 de novembro de 1911, em Detroit, nos Estados Unidos, pelo piloto suíço Louis Chevrolet e pelo empresário William Durant, criador da General Motors. A marca nasceu com foco em carros populares acessíveis e expandiu-se globalmente, tornando-se uma das maiores potências automotivas do mundo.</h1>
      <Image src="/imagens/chevrolet.jpg" alt="carro" width={500} height={500} />
      </section>
    </main>
    </>
    )
};
