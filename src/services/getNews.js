export default function getNews (keywords) {
    const apiKey = 'b124059112e809b7533110ad76df2eb8';
    const apiUrl =  `http://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=${keywords}`;


    return fetch(apiUrl)
        .then(res => res.json())
        .then(resNew => {
            return resNew.data;
        })
}