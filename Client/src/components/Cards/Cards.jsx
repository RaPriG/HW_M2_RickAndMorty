import Card from '../Card/Card';
import styles from './Cards.module.css';
// import { useState,useEffect } from 'react';

export default function Cards({ characters, onClose }) {
   return (
      <div className={styles.container}>
         {characters.map((personaje,index) =>
            <Card {...personaje} key={index} onClose={() => onClose(personaje.id)} />)}
      </div>
   )
}

