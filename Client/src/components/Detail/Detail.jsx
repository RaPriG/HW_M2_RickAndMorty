import { useParams } from "react-router-dom";
import styles from './Detail.module.css';

export default function Detail({ characters }) {
    const { id } = useParams();
    let personaje = characters.filter((personaje) => personaje.id === Number(id))[0];

    return (
        <div className={styles.container}>
            <div>
                <img src={personaje.image} alt={personaje.name} className={styles.img} />
            </div>
            <div style={{ margin: 10 }}>
                <h2 className={styles.name}>Name: {personaje.name}</h2>
                <h2 className={styles.specie}>Specie: {personaje.species}</h2>
                <h2 className={styles.gender}>Gender: {personaje.gender}</h2>
                <h2 className={styles.status}>Status: {personaje.status}</h2>
                <h2 className={styles.origin}>Origin: {personaje.origin.name}</h2>
            </div>
        </div>
    );
};