import React from 'react';
import { useHistory } from 'react-router-dom';
import './ListItem.css'

const ListItem = ({ title, vote_average, poster_path, vote_count, id}) => {

  const history = useHistory();

  const redirectToUserPage = () => {
    history.push(`/movie/${id}`)
  }
  return (

    <div className='card' onClick={redirectToUserPage}>
      <img className='card__img' src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : 'https://www.padtinc.com/blog/wp-content/uploads/2020/09/plc-errors.jpg'} alt={title} />
      <h2 className='card__title'>{title}</h2>
      <p className='card__text'>Отзыв: {vote_average}</p>
      <p className='card__text'>Просмотры: {vote_count}</p>
    </div>
  );
};

export default ListItem;