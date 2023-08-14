import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getNewsItem } from "api/axios";
import styles from './NewsItemDetails.module.scss';

const NewsItemDetails = () => {
    const params = useParams();
    const [newsItem, setNewsItem] = useState();

    useEffect(() => {
        getNewsItem(params.id).then(res => {
            setNewsItem(res);
    
            console.log(res)
        })
    }, [])

    return (
        <div className={styles.newsItemDetails}>
            <div className="container">
                {
                    newsItem
                    ? (
                        <>
                            <div className={styles.newsItemDetails__top}>
                                <h1>{newsItem.title}</h1>
                                <div className="separator"></div>
                            </div>
                            
                            <div
                                className={styles.newsItemDetails__image}
                                style={{  
                                    backgroundImage: `url(${require(`components/NewsList/img/${newsItem.image_path}`)})`,
                                    backgroundPosition: 'center center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            ></div>

                            <p className={styles.newsItemDetails__content}>{newsItem.content}</p>
                        </>
                    ) 
                    : 'Loading...'
                }
            </div>
        </div>
    )
}

export default NewsItemDetails;