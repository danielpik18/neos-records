import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './NewsItem.css';

/* Using memo() to avoid re-rendering previous items as we scroll */
const NewsItem = memo(React.forwardRef(({newsItem}, ref) => {
    const {id, title, content, image_path, createdAt} = newsItem;
    
    let image;

    try {
        image = require(`../NewsList/img/${image_path}`);
    } catch (error) {
        /* Set default image if the original it isn't found. */
        image = require(`../NewsList/img/news-1.jpg`);
    }

    const newsItemBody = (
        <>
            <img src={image} alt='News post image.' />
                
            <div className='newsItem__rightSide'>
                <h1 className='newsItem__title'>{title}</h1>
                <p className='newsItem__content'>{content}</p>

                <p className='newsItem__date'>{createdAt}</p>
            </div>
        </>
    )
    
    const finalContent = ref
        ? <Link ref={ref} to={`${id}`} id={id} className='newsItem'>{newsItemBody}</Link>
        : <Link to={`${id}`} id={id} className='newsItem'>{newsItemBody}</Link>
    

    return <>
        {Math.random()}
        {finalContent}
    </>
}))

export default NewsItem;