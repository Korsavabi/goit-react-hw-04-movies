import React from 'react';
import './ListItem.css'
// import 'react-router-dom';
import { useHistory } from 'react-router-dom';
const ListItem = ({ title, release_date, backdrop_path, overview}) => {

  const history = useHistory();

  const redirectToUserPage = () => {
    history.push(`/users/${title}`)
  }

  return (
    <div className='card' onClick={redirectToUserPage}>
      <img className='card__img' src={backdrop_path} alt='' />
      <h2 className='card__title'>{title}</h2>
      <p className='card__text'>Data: {release_date}</p>
      <p className='card__text'>{overview}</p>
    </div>
  );
};

export default ListItem;