import Card from '../Card/Card';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styles from './Favorites.module.css'

export default function Favorites({onClose}) {
    const myFavorites = useSelector(state => state.myFavorites);
    console.log("myFavorite", myFavorites);
   return (
      <div className={styles.container}>
         {myFavorites.map((personaje,index) =>
            <Card {...personaje} key={index} onClose={() => onClose(personaje.id)} />)}
      </div>
   )
}