import React, { useState } from 'react';
import { withCredentials, request } from '../../helpers/request'
import Loader from 'react-loader-spinner';
import './Form.css';

const Form = ({ onSubmit, loaderToggle, errorToggle}) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('users');

    const inputHeandler = ({ target }) => {
        const { value } = target;
        setSearch(value)
    }
    const selectedHeandler = ({ target }) => {
        const { value } = target;
        setType(value)
    }
    const submitHeandler = async (e) => {
        e.preventDefault();

        const url = withCredentials(`https://api.github.com/search/${type}?q=${search}&`);
        try{
            await loaderToggle()
            await errorToggle(false)
            const result = await request('get', url);
            onSubmit(result.items);
        }catch (error) {
            errorToggle(true)
        } finally{
            loaderToggle()
            setSearch('')
        }
    }
    return (
        <form onSubmit={submitHeandler}>
            <input
                className="SearchForm-input"
                type="text"
                // autofocus
                // autocomplete="on"
                name='search'
                value={search}
                onChange={inputHeandler}
                placeholder="Search images and photos"
            />
            {/* <select name="type" value={type} onChange={selectedHeandler}>
                <option value="users">User</option>
                <option value="repositories">Repositories</option>
            </select> */}
            <button type="submit">Search </button>
        </form>
    );
};

export default Form;