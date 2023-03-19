import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getNewsItem } from "../../api/axios";
import './NewsItemDetails.css';

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
        <div className="newsItemDetails">
            {
                newsItem
                ? (
                    <>
                        <h1>{newsItem.title}</h1>
                        <img src={require(`../../components/NewsList/img/${newsItem.image_path}`)} />
                        <p className="newsItemDetails__content">{newsItem.content}</p>
                    </>
                ) 
                : 'Loading...'
            }
        </div>
    )
}

export default NewsItemDetails;