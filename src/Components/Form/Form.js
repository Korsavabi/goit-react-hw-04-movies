import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useHistory, useLocation } from 'react-router-dom';
import './Form.css';

const Form = ({ onToSubmit, search, inputHendler, resetForm}) => {
    const history = useHistory();
    const location = useLocation()

    const submitHendler = (e) => {
        e.preventDefault();
        onToSubmit(search);
        resetForm();
        history.push({ ...location, search: `?userName=${search}` })
    }
    
    return (
        <form onSubmit={submitHendler} className='form'>
            <input
                className="SearchForm-input"
                type="text"
                name='search'
                value={search}
                onChange={inputHendler}
                placeholder="Search images and photos"
            />
            <button type="submit">Search </button>
        </form>
    );
};

export default Form;
// import React, { Component } from 'react';
// import PropTypes from "prop-types";

// class Form extends Component {

//     state = {
//         search: '',
//     }
//     submitHandler = (e) => {
//         e.preventDefault();
//         const { search } = this.state;
//         this.props.onSubmit(search);
//         this.setState({ search: '' })
//         console.log(this.props.value.history.location.search);

//     }

//     inputHandler = (e) => {
//         this.setState({ search: e.target.value })
//     }
//     render() {
//         const { search } = this.state;

//         return (
//             <header className="Searchbar">
//                 <form className="SearchForm" onSubmit={this.submitHandler}>
//                     <button type="submit" className="SearchForm-button">
//                         <span className="SearchForm-button-label">Search</span>
//                     </button>

//                     <input
//                         className="SearchForm-input"
//                         type="text"
//                         name='search'
//                         value={search}
//                         onChange={this.inputHandler}
//                         placeholder="Search images and photos"
//                     />
//                 </form>
//             </header>
//         );
//     }
// }



// Form.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }

// export default Form;