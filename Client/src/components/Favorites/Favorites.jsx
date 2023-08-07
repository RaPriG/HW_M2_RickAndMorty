import Card from '../Card/Card';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Favorites.module.css'
import * as actions from '../../redux/actions';
import { useEffect, useState } from 'react';

export default function Favorites({ onClose }) {
   const myFavorites = useSelector(state => state.myFavorites);
   const filterFav = useSelector(state => state.filterFavorite);
   const [favSelec, setFavSelec] = useState([]);
   const [siFilter, setSiFilter] = useState(false);

   const dispatch = useDispatch();

   useEffect(() => {
      let resul = siFilter ? filterFav : myFavorites;
      setFavSelec(resul);
      console.log("FAVORITOS", myFavorites);
   }, [myFavorites, filterFav, siFilter]);

   const handleOrder = (event) => {
      dispatch(actions.orderCards(event.target.value));
   }

   const handleFilter = (event) => {
      dispatch(actions.filterCards(event.target.value));
      setSiFilter(true);
   }

   return (
      <div className={styles.container}>
         <div className={styles.containerOption}>
            <select className={styles.select} onChange={handleOrder}>
               <option value="A" >Ascendente</option>
               <option value="D">Descendente</option>
            </select>
            <select className={styles.select} onChange={handleFilter}>
               <option value="Todos">Todos</option>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="Unknown">Unknown</option>
            </select>
         </div>
         {favSelec && favSelec.map((personaje, index) =>
            <Card {...personaje} key={index} onClose={() => onClose(personaje.id)} />)}
      </div>
   )
}