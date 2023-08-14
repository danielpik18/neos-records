import React from "react";
import styles from './Contact.module.scss';

const Contact = () => {

    return (
        <div className={styles.contact}>
            <div className="container">
                <h1 className="sectionTitle">Contact NEOS Records</h1>
                <div className="separator"></div>

                <div className={styles.contact__box}>
                    <p>Have a question, suggestion, or just want to share your thoughts?<br />We'd love to hear from you! Connect with us using the information below, and let's start a conversation that harmonizes with the beat of your curiosity.</p>

                    <div>
                        Contact Information:

                        <ul>
                            <li>Email: [email address]</li>
                            <li>Phone: [phone number]</li>
                            <li>Address: [physical address]</li>
                        </ul>
                    </div>

                    <p>
                        Feel free to reach out for inquiries about our artists, music releases, licensing opportunities, or anything else that strikes a chord. We're here to amplify your experience with Neos Records and bring your musical journey to life.
                        <br />
                        Stay connected and let's create music magic together!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;