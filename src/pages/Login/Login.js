import React, { useState, useContext, useEffect, useRef } from 'react';
import styles from './Login.module.scss';
import { login } from 'api/axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import jwt_decode from "jwt-decode";
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const emailInput = useRef();
    const passwordInput = useRef();

    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await login(emailInput.current.value, passwordInput.current.value);

        if(res?.error) return toast.error(res.error);

        const user = jwt_decode(res.accessToken);

        console.log('login USER:', user);

        if (!user) return toast.error('Unexpected error.')
        
        setUser(user);
        navigate(-1)
    }

    useEffect(() => {
        emailInput.current.focus()
    }, [])
 
    return (
        <>
        <div className={styles.login}>
            <div className='container'>
                <h1 className='sectionTitle'>Login</h1>
                <div className='separator'></div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.login__formGroup}>
                        <label htmlFor='email' >Email</label>
                        <input type='text' name='email' ref={emailInput}></input>
                    </div>

                    <div className={styles.login__formGroup}>
                        <label htmlFor='password' >Password</label>
                        <input type='password' name='password' ref={passwordInput}></input>
                    </div>

                    <div className={styles.login__formGroup}>
                        <button>Login</button>
                    </div>
                </form>

                <h2>Don't have an account yet?</h2>
                <Link className={styles.login__registerButton} to='/register'><img src={require('./img/arrow-right-svgrepo-com.svg').default}></img> Register your account.</Link>
            </div>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Flip}
        />
        </>
    )
 }

 export default Login;