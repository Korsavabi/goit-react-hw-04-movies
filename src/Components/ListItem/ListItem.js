import React from 'react';
import { useHistory } from 'react-router-dom';
import './ListItem.css'

const ListItem = ({ title, vote_average, poster_path, vote_count, id, name, media_type, profile_path }) => {

  const history = useHistory();

  const redirectToMoviePage = () => {
    history.push(`/movie/${id}` || `/person/${id}`)
  }
  return (

    <div className='card' onMouseUp={() => redirectToMoviePage()}>
      <div className='card__img-box'>
        <img className='card__img' src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : profile_path  ? `https://image.tmdb.org/t/p/w500/${profile_path}` : 'https://www.padtinc.com/blog/wp-content/uploads/2020/09/plc-errors.jpg'} alt={title} width='300' />
      </div>
      <div className='card__text-box'>
        <h2 className='card__title'>{title || name}</h2>
        <p className='card__text'>Feedback: {vote_average || '0'}</p>
        <p className='card__text'>Views: {vote_count || '0'}</p>
        <p className='card__text'>Media type: {media_type}</p>
      </div>
    </div>
  );
};

export default ListItem;