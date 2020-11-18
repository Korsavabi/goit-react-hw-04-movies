import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';


const List = ({ movies }) => {

  return (
    <>
        <h2>{movies.length}</h2>
      <div className='container'>
        {movies.map(result => <ListItem key={result.id} {...result} />)}
      </div>
    </>
  );
};

export default List;