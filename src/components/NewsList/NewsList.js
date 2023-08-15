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

    const resetNewsItemsOpacity = () => {
        const newsListChildren = document.getElementById('newsList').children;

        for (let i = 0; i < newsListChildren.length; i++) {
            if(newsListChildren[i].classList.contains('newsItem--not-hovered')) {
                newsListChildren[i].classList.remove('newsItem--not-hovered');
            }
        };
    }

    return (
        <div
            id="newsList"
            className={styles.newsList}
            onMouseLeave={resetNewsItemsOpacity}
        >
            {
                content.length > 0 ?
                content : 'Loading...'
            }
        </div>
    )
}

export default NewsList;