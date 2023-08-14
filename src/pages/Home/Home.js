import React from "react";
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
          <div className="container">
            <h1 className="sectionTitle">Elevate Your Sound with<br />Neos Records</h1>
            <div className="separator" />

            <div className={styles.home__box}>
              <h2>Where Music Finds Its True Symphony</h2>
              <button>Get Started!</button>
            </div>
          </div>
        </div>
    )
}

export default Home;