import React, { useState, useEffect } from 'react';
import { createSinglePersone, request } from '../../helpers/request';
import { useHistory, useLocation, useParams, useRouteMatch, NavLink, Switch, Route, } from 'react-router-dom';
import './SinglePersone.css';
import Notable from '../Notable/Notable';
import Acting from '../Acting/Acting';
const SinglePersone = () => {
    const [persons, setPerons] = useState({})
    const history = useHistory();
    const personeId = useParams().name;
    const match = useRouteMatch();

    useEffect(() => {
        const url = createSinglePersone(personeId);
        request('get', url)
            .then(res => setPerons(res))
            .catch(error => console.log(error))
    }, [])
    const personClick = (e) => {
        return history.push({ pathname: '/movie', search: `userName=${e.target.textContent}` })
    }

    return (
        <div>
            {persons.id ? 
                <div className='person__singl-block'>
                    <div className='person__singl-box-img'>
                        <img src={`https://image.tmdb.org/t/p/w500${persons.profile_path}`} className='person__singl-img' />
                    </div>
                    <div className='person__singl-box'>
                        <h2>{persons.name}</h2>
                        <h3>Place of birth</h3>
                        <p>{persons.place_of_birth}</p>
                        <p>Birthday: {persons.birthday}</p>
                        <h3>Biography</h3>
                        <h4>{persons.biography}</h4>
                        <h2>Also known as</h2>
                        <ul className="person__singl-list">
                            {persons.also_known_as.map(know => <li onClick={personClick} className='person__singl-list-item' key={know}><p className="person__singl-list-item-link">{know}</p></li>)}
                        </ul>
                    </div>
                </div> : <h1>The resource you requested could not be found.</h1>
            }
            <ul className='list__single'>
                <li><NavLink to={`${match.url}/notable`} className="link">Notable for</NavLink></li>
                <li><NavLink to={`${match.url}/acting`} className="link">Acting art</NavLink></li>
            </ul>

            <Switch>
                <Route path={`${match.url}/notable`} exact component={Notable} />
                <Route path={`${match.url}/acting`} exact component={Acting} />
            </Switch>
        </div>
    );
};

export default SinglePersone;