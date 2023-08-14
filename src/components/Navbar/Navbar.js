import React from "react";
import { Link, NavLink } from 'react-router-dom';
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
                <NavLink to={listItem.path} end className={({ isActive, isPending }) =>
                    isPending ? styles.navbar__linkPending : isActive ? styles.navbar__linkActive : ""
                } >

                    <img className={styles.navbar__listItemIcon} src={require(`./img/${listItem.icon}`)} alt='icon' />
                    <p>{listItem.name}</p>

                </NavLink>
            </li>
        )
    })


    return (
        <div className={styles.navbar}>
            <Link to={'/'}>
                <img
                    src={require(`./img/neos-records-logo.png`)}
                    alt='neos-records-logo'
                    className={styles.navbar__logo} />
            </Link>

            <ul className={styles.navbar__links}>
                {navbarLinks}
            </ul>

            {<NavbarUser />}
        </div>
    )
}

export default Navbar;