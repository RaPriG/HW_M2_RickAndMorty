import React, { useState } from "react";

export default function SearchBar(props) {

   const [id, setId] = useState('');
   const handleChange = (e) => {
      setId(e.target.value)
   }
   return (
      <div style={{
         padding: '10px',
         backgroundColor:'blue',
         borderRadius:15,
         background: 'linear-gradient(135deg, rgba(46, 205, 207, 0.7), rgba(255, 255, 255, 0.8))',
      }}>
         <input type='search' value={id} onChange={handleChange} 
         style={{
            height:25,
         }}/>
         <button onClick={() => props.onSearch(id)}
         style={{
            height:25,
         }}>Agregar</button>
      </div>
   );
}
