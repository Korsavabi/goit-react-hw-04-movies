import React from 'react';
import ListItem from '../ListItem/ListItem';
import './List.css';


const List = ({movies}) => {
 
  return (
    <>
    <div className='container'>
      {movies.map(result => <ListItem key={result.id} {...result} />)}
    </div>
    </>
  );
};

export default List;