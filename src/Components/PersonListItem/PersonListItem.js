import React from 'react';
import { useHistory } from 'react-router-dom';

const PersonListItem = ({ id, name, profile_path, known_for }) => {
    const history = useHistory();
    const redirectToUserPage = () => {
        history.push(`/person/${id}-` + `${name}`)
    }
    const personClick = (e) => {
        return history.push({ pathname: '/movie', search: `userName=${e.target.textContent}` })
    }
    return (
        <>
            <div className="person__block-img">
                <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} className='person__img' width='270' />
            </div>
            <div className="person__block-text">
                <h3 onClick={redirectToUserPage}>{name}</h3>
                <ul className="person__block-list">
                    {known_for.map(know => <li className="person__block-list-item" key={know.id}><a onClick={personClick}>{(know.original_title) || (know.original_name) || (know.name)}</a></li>)}
                </ul>
            </div>
        </>
    );
};

export default PersonListItem;