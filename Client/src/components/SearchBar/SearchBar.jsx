import React, { useState } from "react";
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {

   const [id, setId] = useState('');
   const handleChange = (e) => {
      setId(e.target.value)
   }
   return (
      <div className={styles.barraSuperior}>
         <input type='search' value={id} onChange={handleChange}
            className={styles.input} />
         <button onClick={() => props.onSearch(id)}
            className={styles.btn}>Agregar</button>
      </div>
   );
}
