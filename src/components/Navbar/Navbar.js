import React from "react";
import { Link } from 'react-router-dom';
import NavbarUser from "../NavbarUser/NavbarUser";
import styles from './Navbar.module.css';

const Navbar = () => {
    const listItems = [
        {
            name: 'Home',
            icon: 'home-svgrepo-com.svg',
            path: '/'
        },
        {
            name: 'News',
            icon: 'news-svgrepo-com.svg',
            path: '/news'
        },
        {
            name: 'About Us',
            icon: 'people-svgrepo-com.svg',
            path: '/about-us'
        },
        {
            name: 'Contact',
            icon: 'mail-svgrepo-com.svg',
            path: '/contact'
        }
    ];

    const navbarLinks = listItems.map(listItem => {
        return (
            <li className={`${listItem.name === 'Login' ? styles.navbar__login : ''}`}  key={listItem.path}>
                <Link to={listItem.path} >

                    <img className={styles.navbar__listItemIcon} src={require(`./img/${listItem.icon}`)} alt='test' />
                    <p>{listItem.name}</p>


                </Link>
            </li>
        )
    })


    return (
        <div className={styles.navbar}>
            <Link to={'/'}><h1>NEOS Records</h1></Link>

            <ul className={styles.navbar__links}>
                {navbarLinks}
            </ul>

            {<NavbarUser />}
        </div>
    )
}

export default Navbar;