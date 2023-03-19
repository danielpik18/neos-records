import React from 'react';
import styles from './MyAccount.module.scss';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const MyAccount = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className={styles.myAccount}>
            My Account

            <div className={styles.myAccount__info}>
                <div className={styles.myAccount__infoBlock}>
                    <div>
                        <p><strong>Name: </strong>{user.name}</p>
                    </div>

                    <div className={styles.myAccount__infoBlock}>
                        <p><strong>Lastname:</strong> {user.lastname}</p>    
                    </div>

                    <div className={styles.myAccount__infoBlock}>
                        <p><strong>Email:</strong> {user.email}</p>    
                    </div>
                    
                    <div className={styles.myAccount__infoBlock}>
                        <p><strong>Role:</strong> {user.role}</p>    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAccount;