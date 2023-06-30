import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";


export default function Card(personaje) {
   const dispatch = useDispatch();
   const [isFav, setIsFav] = useState(false);
   const myFavorites = useSelector(state => state.myFavorites);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(personaje.id));
      } else {
         setIsFav(true);
         dispatch(addFav(personaje));
      }
   }

   useEffect(() => {
      for (let i = 0; i < myFavorites.length; i++) {
         if (myFavorites[i].id === personaje.id) {
            setIsFav(true);
         }
      };
   }, [myFavorites]);

   return (

      <div className={styles.container}>
         {
            isFav ? (<button onClick={handleFavorite} className={styles.btnFav} >❤️</button>) :
               (<button onClick={handleFavorite} className={styles.btnFav}>🤍</button>)
         }
         <button className={styles.buttonCerrar} onClick={() => personaje.onClose()}>X</button>
         <img className={styles.img} src={personaje.image} alt={personaje.name} />
         <div >
            <div className={styles.containerName}>
               <Link to={`/detail/${personaje.id}`} style={{ textDecoration: 'none', }}>
                  <h2 className={styles.name}>{personaje.name}</h2>
               </Link>
            </div>
            <div>
               <h2 className={styles.specie}>{personaje.species}</h2>
               <h2 className={styles.gender}>{personaje.gender}</h2>
            </div>
         </div>
      </div>
   );
}
