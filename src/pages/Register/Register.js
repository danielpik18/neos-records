import React, { useEffect, useRef } from 'react';
import styles from './Register.module.css';

const Register = () => {
    const nameInput = useRef();
    const lastnameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        nameInput.current.focus()
    }, [])
 
    return (
        <div className={styles.register}>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <div className={styles.register__formGroup}>
                    <label htmlFor='name' >Firstname</label>
                    <input type='text' name='name' ref={nameInput} autoComplete='new-password'></input>
                </div>

                <div className={styles.register__formGroup}>
                    <label htmlFor='lastname' >Lastname</label>
                    <input type='text' name='lastname' ref={lastnameInput} autoComplete='new-password'></input>
                </div>

                <div className={styles.register__formGroup}>
                    <label htmlFor='email' >Email</label>
                    <input type='text' name='email' ref={emailInput} autoComplete='new-password'></input>
                </div>

                <div className={styles.register__formGroup}>
                    <label htmlFor='password' >Password</label>
                    <input type='password' name='password' ref={passwordInput} autoComplete='new-password'></input>
                </div>

                <div className={styles.register__formGroup}>
                    <label htmlFor='confirmPassword' >Confirm password</label>
                    <input type='password' name='confirmPassword' ref={confirmPasswordInput} autoComplete='new-password'></input>
                </div>

                <div className={styles.register__formGroup}>
                    <button>Register</button>
                </div>
            </form>
        </div>
    )
 }

 export default Register;