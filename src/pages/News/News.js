import React from 'react';
import NewsList from 'components/NewsList/NewsList';
import styles from './News.module.css';

const News = () => {
    return (
        <div className={styles.news}>
            <div className='container'>
                <h1 className='sectionTitle'>News</h1>
                <div className='separator'></div>

                <NewsList />
            </div>
        </div>
        
    );
};

export default News;