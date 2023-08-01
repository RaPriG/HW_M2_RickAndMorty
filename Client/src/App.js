import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './Form/Form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites'
import Swal from 'sweetalert2';
import AlertContent from 'sweetalert2-react-content';
const API = "http://localhost:3001/rickandmorty/character";
function App() {
   const navegate = useNavigate();
   const cantStars = 300;
   const container = document.body;
   const createStart = () => {

      for (let i = 0; i < cantStars; i++) {
         const star = document.createElement('div');
         if (i % 2 === 0) {
            star.className = "star";
         } else {
            star.className = "starShine";
         }

         star.id = "star";
         let size = `${Math.random() * 2}px`;
         let pTop = `${Math.random() * 100}%`;
         let pLeft = `${Math.random() * 100}%`;

         star.style.width = size;
         star.style.height = size;
         star.style.top = pTop;
         star.style.left = pLeft;

         container.appendChild(star);
      }
   }

   useEffect(() => {
      createStart();
   }, []);

   const [characters, setCharacters] = useState([]);
   const isRaiz = useLocation().pathname === '/';

   function onSearch(id) {
      console.log(characters);
      if (characters.find(p => p.id === Number(id))) {
         alert("El personaje que intenta mostrar ya está en pantalla");
         return;
      }
      axios(`${API}/${id}`)
         .then(({ data }) => {
            setCharacters((oldChars) => [...oldChars, data]);
         })
         .catch((err) => {
            console.log("ERROR: ", err);
            const MySwal = AlertContent(Swal);
            MySwal.fire({
               title: err.response.data,
               icon: 'info',
               timer: 3000,
            });
         })
   }

   const onClose = (index) => {
      setCharacters(characters.filter(i => i.id !== index))
   };

   function login(user) {
      const { email, password } = user;
     
      axios.post(`${API}/login`, {
         email: email,
         password: password
      }).then(({ data }) => {
         const { access } = data;
         if (access) {
            navegate('/home');
        } else {
            alert("Email y/o password incorrecto");
        }
      });
   }

   return (
      <div className='App'>
         {isRaiz ? null : <Nav onSearch={onSearch} />},
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose} />
            } />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail characters={characters} />} />
            <Route path='/favorites' element={<Favorites />} onClose={onClose} />
         </Routes>
      </div>
   );
}

export default App;
