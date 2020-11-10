import React from 'react';
import './ListItem.css'
// import 'react-router-dom';
import { useHistory } from 'react-router-dom';
const ListItem = ({ title, vote_average, backdrop_path, vote_count}) => {

  const history = useHistory();

  const redirectToUserPage = () => {
    history.push(`/users/${title}`)
  }

  return (
    <div className='card' onClick={redirectToUserPage}>
      <img className='card__img' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt='' />
      <h2 className='card__title'>{title}</h2>
      <p className='card__text'>Отзыв: {vote_average}</p>
      <p className='card__text'>Просмотры: {vote_count}</p>
    </div>
  );
};

export default ListItem;