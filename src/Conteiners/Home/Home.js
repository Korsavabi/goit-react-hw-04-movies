import React, { Component } from 'react';
import List from '../../Components/List/List';
import Loader from 'react-loader-spinner'
import { withCredentials, request } from '../../helpers/request'

class Home extends Component {
    state = {
        movies: [],
        loader: true,
        error: false,
        search: '',
        page: 1,
        perPage: 9,
        totalItemCount: 20
    }
   
    componentDidMount() {
        this.getMovies()
    }
    getMovies = async () => {

        const url = withCredentials(`https://api.themoviedb.org/3/trending/movie/day?language=ru&`);
        try {
            const result = await request('get', url);
            this.updateMovies(result.results)
        } catch (error) {
            this.errorToggle(true)
        } finally {
            this.loaderToggle(false)
        }
    }
    updateMovies = (movies) => {
        this.setState({ movies })
    }
    loaderToggle = (status) => {
        this.setState({ loader: status })
    }
    errorToggle = (status) => {
        this.setState({ error: status })
    }

    render() {
        const { movies, loader, error, } = this.state;
        return (
            <>
                {loader && <Loader type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} />}
                {/* <Form /> */}
                <List movies={movies}/>

            </>
        );
    }
}

export default Home;