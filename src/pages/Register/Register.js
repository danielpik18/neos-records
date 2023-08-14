import React, { useContext, useEffect, useRef } from 'react';
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

    const { setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordInput.current.value !== confirmPasswordInput.current.value) return alert("Passwords don't match")

        const res = await register(
            nameInput.current.value,
            lastnameInput.current.value,
            emailInput.current.value,
            passwordInput.current.value
        );

        console.log(res)

        if(res.accessToken) {
            const user = jwt_decode(res.accessToken);

            console.log('user: ', user);

            if (!user) return alert('Unexpected error.')
            
            setUser(user);
            navigate('/home')
        }
    
        if(res?.error) return toast.error(res.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
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
                        <input type='text' name='name' placeholder='Enter your first name' ref={nameInput} autoComplete='new-password'></input>
                    </div>

                    <div className={styles.register__formGroup}>
                        <label htmlFor='lastname' >Lastname</label>
                        <input type='text' name='lastname' placeholder='Enter your last name' ref={lastnameInput} autoComplete='new-password'></input>
                    </div>

                    <div className={styles.register__formGroup}>
                        <label htmlFor='email' >Email</label>
                        <input type='text' name='email' placeholder='Enter your email address' ref={emailInput} autoComplete='new-password'></input>
                    </div>

                    <div className={styles.register__formGroup}>
                        <label htmlFor='password' >Password</label>
                        <input type='password' name='password' placeholder='Enter your password' ref={passwordInput} autoComplete='new-password'></input>
                    </div>

                    <div className={styles.register__formGroup}>
                        <label htmlFor='confirmPassword' >Confirm password</label>
                        <input type='password' name='confirmPassword' placeholder='Verify your password' ref={confirmPasswordInput} autoComplete='new-password'></input>
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