import React, { useCallback, useRef, useState } from 'react';
import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';
import useNews from '../../hooks/useNews';


const NewsList = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const {
        results,
        loading,
        error,
        hasNextPage
    } = useNews(currentPage);   

    const intObserver = useRef();

    const lastNewsItemRef = useCallback(newsItem => {
        if (loading) return

        if(intObserver.current) intObserver.current.disconnect()

        intObserver.current = new IntersectionObserver(news => {
            if(news[0].isIntersecting && hasNextPage) {
                setCurrentPage(previousPage => previousPage + 1)
            }
        })

        if (newsItem) intObserver.current.observe(newsItem)
    });


    const content = results.map((newsItem, index) => {
            if(index + 1 === results.length) {
                return <NewsItem key={newsItem.id} ref={lastNewsItemRef} newsItem={newsItem} />
            }
    
            return <NewsItem key={newsItem.id} newsItem={newsItem} />
        })
    ;

    return (
        <div className={styles.newsList}>
            <h1>News</h1>
            {content}
        </div>
    )
}

export default NewsList;