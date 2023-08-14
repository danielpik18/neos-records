import React from 'react';
import styles from './MyAccount.module.scss';
import { useContext } from 'react';
import { AuthContext } from 'contexts/AuthContext';

const MyAccount = () => {
    const { user } = useContext(AuthContext);

    console.log(user);

    return (
        <div className={styles.myAccount}>
            <div className='container'>
                <h1 className='sectionTitle'>My account</h1>
                <div className='separator'></div>

                <div className={styles.myAccount__info}>
                    <div className={styles.myAccount__infoBlock}>
                        <strong>Name: </strong>
                        <p>{user.name}</p>
                    </div>

                    <div className={styles.myAccount__infoBlock}>
                        <strong>Lastname:</strong>
                        <p>{user.lastname}</p>    
                    </div>

                    <div className={styles.myAccount__infoBlock}>
                        <strong>Email:</strong>
                        <p>{user.email}</p>    
                    </div>
                    
                    <div className={styles.myAccount__infoBlock}>
                        <strong>Role:</strong>
                        <p>{user.role}</p>    
                    </div>

                    <div className={styles.myAccount__infoBlock}>
                        <strong>Registered on:</strong>
                        <p>{user.createdAt.slice(0, 10)}</p>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;