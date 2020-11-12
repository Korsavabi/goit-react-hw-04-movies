import React, { useEffect, useState } from 'react';
import { createReviews, request } from '../../helpers/request';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'
import './Reviews.css';


const Reviews = () => {
    const [reviews, setReviews] = useState({});
    const castId = useLocation()
    const params = Object.keys(queryString.parse(castId.pathname))
    const paramsId = params[0].split('/')
    useEffect(() => {
        const url = createReviews(paramsId[2]);
        request('get', url)
            .then(res => setReviews(res))
            .catch(error => console.log(error))
    }, [])
    return (
        <div className="reviews__box">
            {reviews.results.length ? (
                reviews.results.map(result => {
                    return (
                        <div className="reviews__block" key={result.id}>
                            <h3>Author: {result.author}</h3>
                            <p>{result.content}</p>
                            {/* <p>{result ? (result.content) : 'The resource you requested could not be found.'}</p> */}
                        </div>
                    )
                })
            ): (<p>The resource you requested could not be found.</p>)}
        </div>
    );
};

export default Reviews;