import React, { useEffect, useState } from 'react';
import { useParams, NavLink, Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import { createSingleMovie, request } from '../../helpers/request';
import './SingleMovie.css';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

const SingleMovie = () => {
    const [movie, setMovie] = useState({});
    const movieId = useParams().name;
    const match = useRouteMatch();
    const history = useHistory();
    
    useEffect(() => {
        const url = createSingleMovie(movieId);
        request('get', url)
            .then(res => setMovie(res))
            .catch(error => console.log(error))
    }, [])
    const genreClick = (e) => {
      return  history.push({ pathname:'/movie', search: `userName=${e.target.textContent}`})
    }
    const goToBack = () => {
        return  history.push({ pathname:'/movie'})
    }
    return (
        <div >
            <button onClick={goToBack} className='button__movie' type="button">go back</button>
            {movie.id && (<div className='movie__box'>
                <div className='movie__box-img'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='movie__img' />
                </div>
                <div className='movie__box-block'>
                    <h1 className='movie__title'>{movie.title} ( {new Date(movie.release_date).getFullYear()} )</h1>
                    <p className='movie__text'>User Score: {movie.runtime}%</p>
                    <h2 className='movie__title-h2'>Genre</h2>
                    <ul className='list'>
                        {movie.genres.map(genre => <li className='list__item' key={genre.id}><a onClick={genreClick} className='list__item-link'>{genre.name}</a></li>)}
                    </ul>
                    <h3 className='movie__title-h3'>{movie.tagline}</h3>
                    <h2 className='movie__title-h2'>Overview</h2>
                    <p className='movie__text'>{movie.overview? movie.overview : 'The resource you requested could not be found.'}</p>
                </div>
            </div>)}
            <ul className='list__single'>
                <li><NavLink to={`${match.url}/cast`} className="link">Cast</NavLink></li>
                <li><NavLink to={`${match.url}/reviews`} className="link">Reviews</NavLink></li>
            </ul>

            <Switch>
                <Route path={`${match.url}/cast`} exact component={Cast} />
                <Route path={`${match.url}/reviews`} exact component={Reviews} />
            </Switch>
        </div>
    );
};

export default SingleMovie;