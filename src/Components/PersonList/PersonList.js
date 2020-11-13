import React from 'react';
import PersonListItem from '../PersonListItem/PersonListItem'

const PersonList = ({persons}) => {
    return (
        <ul className='person__list'>
       {persons.map(result => <li className='person__list-item' key={result.id}><PersonListItem {...result}/></li>)}
       </ul>
    );
};

export default PersonList;