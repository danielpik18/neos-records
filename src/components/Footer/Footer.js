import React from "react";
import styles from './Footer.module.css';

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className="container">
                <img
                    src={require(`./img/neos-records-logo--white.png`)}
                    alt='neos-records-logo'
                    className={styles.footer__logo} />

                <div className={styles.footer__copy}>
                    <p>
                    Copyright © {new Date().getFullYear()} Neos Records. All Rights Reserved.
                    <br/><br/>
                    All content, including music recordings, images, text, and other materials featured on this website are protected by copyright law. Any unauthorized use, reproduction, distribution, or modification of these materials is strictly prohibited without the prior written consent of Neos Records.
                    <br/><br/>
                    For inquiries regarding licensing, distribution, or any other use of our copyrighted materials, please contact us at [email address].
                    <br/><br/>
                    Thank you for respecting the intellectual property rights of Neos Records.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;