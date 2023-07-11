import React, { useState } from "react";
import logo from '../assets/logo.png';
import portada from '../assets/portada.png';
import { useNavigate } from "react-router-dom";
import styles from './Form.module.css'



// const validate = (form) => {
//     const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/;
//     let errors = {};

//     if (!form.password) {
//         errors.password = "Debe ingresar un Password Válido";
//     } else {
//         errors.password = "";
//     }
//     if (!form.email || !regexEmail.test(form.email)) {
//         errors.email = "Debe ingresar un Email Válido";
//     } else {
//         errors.email = "";
//     }

//     return errors;

// }
export default function Form(sesion) {
    const navegate = useNavigate();

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    // const [errors, setErrors] = useState({
    //     email: "",
    //     password: "",
    // });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value });
        // setErrors(validate({ ...inputs, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (sesion.login(inputs)) {
            navegate('/home');
        } else {
            alert("Email y/o password incorrecto");
        }
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
