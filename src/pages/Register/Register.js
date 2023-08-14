import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './Register.module.scss';
import { register } from 'api/axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import jwt_decode from "jwt-decode";

import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const nameInput = useRef();
    const lastnameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    const confirmPasswordInput = useRef();

    const [role, setRole] = useState('user');

    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const onRadioChange = (event) => {
        setRole(event.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordInput.current.value !== confirmPasswordInput.current.value) return toast.error("Passwords don't match")

        const res = await register(
            nameInput.current.value,
            lastnameInput.current.value,
            emailInput.current.value,
            passwordInput.current.value,
            role
        );

        console.log(res)

        if(res.accessToken) {
            const user = jwt_decode(res.accessToken);

            console.log('user: ', user);

            if (!user) return toast.error('Unexpected error.')
            
            setUser(user);
            navigate('/')
        }
    
        if(res?.error) return toast.error(res.error);
    }

    useEffect(() => {
        nameInput.current.focus()
    }, [])
 
    return (
        <>
        <div className={styles.register}>
            <div className='container'>
                <h1 className='sectionTitle'>Register</h1>
                <div className='separator'></div>

                <form onSubmit={handleSubmit}>
                    <div className={styles.register__formGroup}>
                        <label htmlFor='name' >Firstname</label>
                        <input type='text' name='name' placeholder='Enter your first name' ref={nameInput}></input>
                    </div>

                    <div className={styles.register__formGroup}>
                        <label htmlFor='lastname' >Lastname</label>
                        <input type='text' name='lastname' placeholder='Enter your last name' ref={lastnameInput}></input>
                    </div>

                    <div className={styles.register__formGroup}>
                        <label htmlFor='email' >Email</label>
                        <input type='text' name='email' placeholder='Enter your email address' ref={emailInput}></input>
                    </div>

                    <div className={styles.register__formGroup}>
                        <label htmlFor='password' >Password</label>
                        <input type='password' name='password' placeholder='Enter your password' ref={passwordInput}></input>
                    </div>

                    <div className={styles.register__formGroup}>
                        <label htmlFor='confirmPassword' >Confirm password</label>
                        <input type='password' name='confirmPassword' placeholder='Verify your password' ref={confirmPasswordInput}></input>
                    </div>

                    <div className={styles.register__formGroup}>
                        <label htmlFor='role' >Role</label>
                        
                        <div className={styles.register__radioButtons}>
                            <div className={styles.register__radioGroup}>
                                <label htmlFor='role-user' >User</label>
                                <input defaultChecked id='role-user' value='user' type='radio' name='role' onChange={onRadioChange} />
                            </div>

                            <div className={styles.register__radioGroup}>
                                <label htmlFor='role-admin' >Admin</label>
                                <input id='role-admin' value='admin' type='radio' name='role' onChange={onRadioChange} />
                            </div> 
                        </div>
                    </div>

                    <div className={styles.register__formGroup}>
                        <button>Register</button>
                    </div>
                </form>
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

 export default Register;