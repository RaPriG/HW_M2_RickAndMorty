import React, { useState } from "react";
import logo from '../assets/logo.png';
import portada from '../assets/portada.png';
import styles from './Form.module.css'

export default function Form(sesion) {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sesion.login(inputs);
    }

    return (
        <div className={styles.container}>
            <div className={styles.containerportada}>
                <img img src={portada} className={styles.imgportada} alt="portada" />
                <img src={logo} className={styles.imglog} alt="logo" />
            </div>
            <div className={styles.containerForm}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor='email' className={styles.labelEmail}>Email:</label>
                    <br />
                    <div>
                        <input name='email' value={inputs.email}
                            onChange={handleChange}
                            type='text'
                            placeholder='Escribe tu email...'
                            className={styles.inputEmail} />
                    </div>
                    <br />
                    <label htmlFor='password' className={styles.labelPassword}>Contraseña:</label>
                    <input name='password'
                        value={inputs.password}
                        onChange={handleChange}
                        type='password'
                        placeholder='Escribe tu contraseña...'
                        className={styles.inputPassword} />

                    <button className={styles.btn} type='submit'>Entrar</button>
                </form>
            </div>
        </div>
    )
}
