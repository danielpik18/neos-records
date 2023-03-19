import { useState, useEffect } from "react";
import { getNews } from "../api/axios";

const useNews = (page = 0, size = 3) => {
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})
    const [hasNextPage, setHasNextPage] = useState(false)

    useEffect(() => {
        setLoading(true);
        setError({})
        
        
        getAllNews();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const getAllNews = async () => {
        try {
            const res = await getNews(page, size)
            
            setHasNextPage(res.currentPage + 1 < res.totalPages)

            if(!res.news) {
                setError({
                    message: 'No response from the server.'
                })

                return;
            }

            setLoading(false);
            setResults(previousResults => [...previousResults, ...res.news])
        } catch (error) {
            setError({ message: error.message })
        }
    }

    return {results, loading, error, hasNextPage}
}

export default useNews;