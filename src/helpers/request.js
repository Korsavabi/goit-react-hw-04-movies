import axios from 'axios';

export const withCredentials = (url) => {
    return `${url}api_key=${process.env.REACT_APP_CLIENT_KEY}`
}

export const request = async (method, url, body = null) => {
    const result = await axios[method](url, body);

    return result.data;
}

export const createSingleMovie = (id) => {
    return withCredentials(`https://api.themoviedb.org/3/movie/${id}?`)
}
export const createSinglePersone = (id) => {
    return withCredentials(`https://api.themoviedb.org/3/person/${id}?`)
}
export const createCast = (id) => {
    return withCredentials(`https://api.themoviedb.org/3/movie/${id}/credits?`)
}
export const createReviews = (id) => {
    return withCredentials(`https://api.themoviedb.org/3/movie/${id}/reviews?`)
}
export const createSearch = (search, page, type) => {
    return withCredentials(`https://api.themoviedb.org/3/search/${type}?query=${search}&page=${page}&`)
}