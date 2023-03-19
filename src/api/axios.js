import axios from "axios";

export const baseURL = 'http://localhost:8000/api/';

export const api = axios.create({
    baseURL
})

export const getNews = async (page = 0, size = 3) => {
    const news = await api.get(`/news?page=${page}&size=${size}`, {
        withCredentials: true
    });

    return news.data;
}

export const getNewsItem = async (id) => {
    const newsItem = await api.get(`/news/${id}`);

    return newsItem.data;
}

export const login = async (email, password) => {
    try {
        const res = await api.post(`/auth/login`, {
            email,
            password
        }, {
            withCredentials: true
        })

        api.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;
        
        console.log('Login res:', res);

        if(res.status !== 200) {
            alert(res.data.message)
        }

        return {accessToken: res.data.accessToken};

    } catch (error) {
        console.log(error.response.data.message)
        return {error: error.response.data.message};
    }

    //return;
}

export const logout = async () => {
    try {
        const res = await api.post(`/auth/logout`, {}, { withCredentials: true })

        //console.log(res.data);

        delete api.defaults.headers.common['Authorization'];

        return res.data;

    } catch (error) {
        console.log(error)
    }
}

export const refreshToken = async () => {
    try {
        console.log('REFRESHING TOKEN')

        const res = await api.post(`/auth/refresh_token`, {}, { withCredentials: true })
        
        console.log(res.data);

        if(!res.data.accessToken) return console.log('Something went wrong...')

        api.defaults.headers.common['Authorization'] = `Bearer ${res.data.accessToken}`;

        return res.data.accessToken;
        
    } catch (error) {
        console.log(error)
    }

    return;
}