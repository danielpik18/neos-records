import React, { useContext, useEffect, useRef } from 'react';
import styles from './Login.module.scss';
import { login } from '../../api/axios';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import jwt_decode from "jwt-decode";

const Login = () => {
    const emailInput = useRef();
    const passwordInput = useRef();

    const { setUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await login(emailInput.current.value, passwordInput.current.value);

        if(res?.error) return alert(res.error)
        
        const user = jwt_decode(res.accessToken);

        if (!user) return alert('Unexpected error.')
        
        setUser(user);
        navigate(-1)
    }

    useEffect(() => {
        emailInput.current.focus()
    }, [])
 
    return (
        <div className={styles.login}>
            <h1>Login</h1>

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

            <p>Don't have an account yet?</p>
            <Link to='/register'>Regsiter</Link>
        </div>
    )
 }

 export default Login;