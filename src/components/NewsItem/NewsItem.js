import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './NewsItem.module.scss';
import'./NewsItem.css';

/* Using memo() to avoid re-rendering previous items as we scroll */
const NewsItem = memo(React.forwardRef(({newsItem}, ref) => {
    const {id, title, synopsis, image_path, createdAt} = newsItem;
    
    let image;

    try {
        image = require(`../NewsList/img/${image_path}`);
    } catch (error) {
        /* Set default image if the original it isn't found. */
        image = require(`../NewsList/img/news-1.jpg`);
    }

    const newsItemBody = (
        <>
            <div
                className={styles.newsItem__image}
                style={{  
                    backgroundImage: `url(${image})`,
                }}
            />
                
            <div className={styles.newsItem__rightSide}>
                <h1 className={styles.newsItem__title}>{title}</h1>
                <p className={styles.newsItem__content}>{synopsis}</p>

                <p className={styles.newsItem__date}>{createdAt.slice(0, 10)}</p>
            </div>
        </>
    )

    const onHover = (event) => {
        let hoveredElementId;

        if (event.target.id) {
            hoveredElementId = event.target.id;
        } else if (event.target.parentElement.id) {
            hoveredElementId = event.target.parentElement.id
        } else if (event.target.parentElement.parentElement.id) {
            hoveredElementId = event.target.parentElement.parentElement.id
        }

        const newsList = document.getElementById('newsList').children;

        for (let i = 0; i < newsList.length; i++) {
            if(newsList[i].id !== hoveredElementId) {
                if(!newsList[i].classList.contains('newsItem--not-hovered')) {
                    newsList[i].classList.add('newsItem--not-hovered')
                }
            }
        };
    }

    const finalContent = <Link
        ref={ref ? ref : null}
        to={`${id}`}
        id={id}
        className={styles.newsItem}
        onMouseEnter={onHover}        
        >
            {newsItemBody}
    </Link>

    return <>
        {finalContent}
    </>
}))

export default NewsItem;