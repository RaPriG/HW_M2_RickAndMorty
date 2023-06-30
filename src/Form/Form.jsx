import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import portada from '../assets/portada.png';
import { useNavigate } from "react-router-dom";
import styles from './Form.module.css'

export default function Form(sesion) {
    const navegate = useNavigate();

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(sesion.login(inputs)){
            navegate('/home');
        }else{
            alert("Email y/o password incorrecto");
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerportada}>
                <img img src={portada} className={styles.imgportada} />
                <img src={logo} className={styles.imglog} />
            </div>

            <div style={{
                position: 'absolute',
                left: '50%',
                transform: ' translate( -50%, 50%)',
                justifyContent: 'center',
                justifyItems: 'center',
                background: 'linear-gradient(135deg, rgba(46, 205, 207, 0.7), rgba(255, 255, 255, 0.8))',
                width: 400,
                height: 200,
                borderRadius: 20,
                boxShadow: '0px 8px 10px',
            }}>
                <form onSubmit={handleSubmit} style={{
                    position: 'relative',
                    top: 10,
                    left: '50%',
                    transform: ' translate(-50%)',
                    width: '100%',
                    height: 180
                }}>
                    <label htmlFor='email' style={{
                        position: 'absolute',
                        left: 54,
                        width: 300,
                        textAlign: 'start',
                        top: 5
                    }}>Email:</label>
                    <br />
                    <input name='email' value={inputs.email} onChange={handleChange} type='text' placeholder='Escribe tu email...'
                        style={{
                            position: 'absolute',
                            left: 52,
                            width: 288,
                            height: 20,
                            top: 30
                        }}></input>
                    {/* {errors.email && <p className='danger'>{errors.email}</p>} */}
                    <br />
                    <label htmlFor='password'
                        style={{
                            position: 'absolute',
                            width: 288,
                            left: 54,
                            textAlign: 'start',
                            top: 60
                        }}>Contraseña:</label>
                    <input name='password' value={inputs.password} onChange={handleChange} type='password' placeholder='Escribe tu contraseña...'
                        style={{
                            position: 'absolute',
                            bottom: 70,
                            left: 52,
                            width: 288,
                            height: 20,
                            justifyItems: 'center',
                            alignSelf: 'center',
                        }}></input>

                    <button className={styles.btn} type='submit'>Entrar</button>
                </form>
            </div>
        </div>
    )
}
