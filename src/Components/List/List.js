import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';


const List = ({movies}) => {
  return (
    <>
    <div className='container'>
      {movies.map(card => <ListItem key={card.id} {...card} />)}
    </div>
    </>
  );
};

export default List;