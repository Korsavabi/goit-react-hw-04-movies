import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { withCredentials, request } from '../../helpers/request';
import PersonList from '../../Components/PersonList/PersonList';
import Loader from 'react-loader-spinner';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './Person.css';

class Person extends Component {
    state = {
        persons: [],
        loader: true,
        error: false,
        page: 1,
        totalPages: 500
    }
    componentDidMount() {
        this.getPerson()
    }
    componentDidUpdate(prevProps, prevState) {
        const { page } = this.state;
        if (page !== prevState.page) {
            this.getPerson()
        }
    }
    handleChange = (event, value) => {
        this.setState({
            page: value
        })
    }
    getPerson = async () => {
        const { page } = this.state;
        const url = withCredentials(`https://api.themoviedb.org/3/person/popular?page=${page}&`);
        try {
            const result = await request('get', url);
            this.updatePerson(result.results)

        } catch (error) {
            this.errorToggle(true)
        } finally {
            this.loaderToggle(false)
        }
    }
    updatePerson = (persons) => {
        this.setState({ persons })
    }
    loaderToggle = (status) => {
        this.setState({ loader: status })
    }
    errorToggle = (status) => {
        this.setState({ error: status })
    }
    
    render() {
        const { persons, loader, page, totalPages } = this.state;
        return (
            <>
                {loader && <Loader type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} />}
                    <PersonList persons={persons}/>
                <Pagination count={totalPages} color="primary" page={page} onChange={this.handleChange} />
            </>
        );
    }
}

export default Person;