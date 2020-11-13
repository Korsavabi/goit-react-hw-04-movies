import React, { useState, useEffect } from 'react';
import { withCredentials, request } from '../../helpers/request';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string'

const SinglePersone = () => {
    const [persons, setPerons] = useState([])
    const history = useHistory();
    const location = useLocation();
    const params = Object.keys(queryString.parse(location.pathname))
    const paramsIdName = params[0].split('/')
console.log(history);
    useEffect(() => {
        const url = withCredentials(`https://api.themoviedb.org/3/person/popular?`);
        request('get', url)
            .then(res => setPerons(res.results))
            .catch(error => console.log(error))
    }, [])
    const personClick = (e) => {
        return history.push({ pathname: '/movie', search: `userName=${e.target.textContent}` })
    }
    console.log(location.pathname);
    console.log(paramsIdName[2]);
    console.log(persons.id);
    return (
        <div>
            {/* <ul className="person__block-list">
                {!!persons.length &&
                    (persons.known_for.map(know => {
                        return (

                            <li className="person__block-list-item" key={know.id}>
                                <img src={`https://image.tmdb.org/t/p/w500/${know.poster_path}`} />
                                <a onClick={personClick}>{(know.title) || (know.original_name) || (know.name)}</a>
                            </li>

                        )
                    }))
                }
            </ul> */}
        </div>
    );
};

export default SinglePersone;