import React, { useEffect, useState } from 'react';
import { createCast, request } from '../../helpers/request';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string'
import './Cast.css'
const Cast = () => {
    const [casts, setCasts] = useState({});
    const castId = useLocation()
    const params = Object.keys(queryString.parse(castId.pathname))
    const paramsId = params[0].split('/')
    const history = useHistory();
    useEffect(() => {
        const url = createCast(paramsId[2]);
        request('get', url)
            .then(res => setCasts(res))
            .catch(error => console.log(error))
    }, [])
    const redirectToUserPage = (id) => {
        history.push(`/person/${id}`)
      }
    return (
        <div className="casts__box">
            {casts.id && (
                casts.cast.map(cas => {
                    return (
                        <div className="casts__block" key={cas.id} onClick={() => redirectToUserPage(cas.id)}>
                            <img src={cas.profile_path ? `https://image.tmdb.org/t/p/w500${cas.profile_path}` : 'https://www.pcjrchargers.com/sites/default/files/default_images/default-user_0.png'} width='200' height='auto'/>
                            <a><h1>{cas.name}</h1></a>
                            <p>{cas.character}</p>
                        </div>)
                })
            )}
        </div>
    );
};

export default Cast;