import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavbarUser.module.scss';
import { AuthContext } from "../../contexts/AuthContext";
import { logout } from "../../api/axios";

const NavbarUser = () => {
    const {user, setUser} = useContext(AuthContext);

    const [showDropdown, setShowDropdown] = useState(false);

    const navigate = useNavigate();

    const handleLogout = async () => {
        const res = await logout();

        if(!res) throw console.log('Error logging out')

        console.log('Log out success!!')

        setUser(null);
        setShowDropdown(false)
        navigate('/login')
    }

    return (
        user 
        ?
        <div className={styles.navbarUser}>
            <div className={styles.navbarUser__loggedUser} onClick={() => setShowDropdown(!showDropdown)}>
                <p>{user.name}</p>
                <img src={require('./img/arrow-down-svgrepo-com.svg').default} alt='test' />
            </div>

            <div className={`${styles.navbarUser__dropdown} ${showDropdown ? styles.navbarUser__dropdownShow : ''}`}>
                <ul>
                    <li>
                        <img src={require('./img/arrow-right-svgrepo-com.svg').default} alt='test' />
                        <Link to='/my-account'>
                            <button>My account</button>
                        </Link>
                    </li>
                    <li>
                        <img src={require('./img/arrow-right-svgrepo-com.svg').default} alt='test' />
                        <button onClick={handleLogout}>Logout</button>
                    </li>
                </ul>
            </div>
            
        </div>
        :
        <>
            <Link to={'/login'} className={styles.loginButton}>
                <img src={require('./img/user-svgrepo-com.svg').default} alt='test' />
                <p>Login</p>
            </Link>
        </>
    )
}

export default NavbarUser;