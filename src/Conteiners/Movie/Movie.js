import React, { Component, useEffect, useState } from 'react';
import Form from '../../Components/Form/Form';
import List from '../../Components/List/List';
import Loader from 'react-loader-spinner';
import { withCredentials, createSearch, request } from '../../helpers/request';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

// const Movie = () => {
//     const [movies, setMovies] = useState([]);
//     const [error, setError] = useState(false);
//     const [loader, setLoader] = useState(false);
//     const [search, setSearch] = useState('');
//     const [page, setPage] = useState(1);

//     useEffect(() => {

//         if (!movies.length && search && error) {
//             setError("Images not found! Try again...");

//         } else setError("");
//     }, [movies]);
//     const handleSearchOnSubmit = () => {
//         getMovies();
//         setPage(1);
//         setMovies([]);
//     };
//     const inputHendler = ({ target }) => {
//         const { value } = target;
//         setSearch(value)
//     }
//     const resetForm = () => {
//         setSearch('')
//     }
//     const getMovies = async () => {
//         setLoader(true)
//         try {
//             const url = withCredentials(`https://api.themoviedb.org/3/search/movie?query=${search}&page=${page}&`);
//             const result = await request('get', url)
//             setMovies((prev) => [...prev, ...result.results]);
//             setPage((prev) => prev + 1);
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoader(false)
//             // window.scrollTo({
//             //     top: document.documentElement.scrollHeight,
//             //     behavior: 'smooth',
//             // });
//         }

//     }
//     return (
//         <>
//             {loader && <Loader type="Puff"
//                 color="#00BFFF"
//                 height={100}
//                 width={100}
//                 timeout={3000} />}
//             <Form onSubmit={handleSearchOnSubmit} search={search} resetForm={resetForm} inputHendler={inputHendler} />
//             {/* <Scrollbars style={{ width: 500, height: 300 }}
//             dataLength={movies.length}
//             next={getMovies}
//             hasMore={true}
//             scrollThreshold="50px"
//             >
//                 <List movies={movies} />
//             </Scrollbars> */}
//             <List movies={movies} />
//             {!!movies.length && <button type="button" onClick={getMovies}>Load More...</button>}
//         </>
//     );
// };

// export default Movie;

class Movie extends Component {
    state = {
        movies: [],
        error: false,
        loader: true,
        search: '',
        page: 1
    }
    componentDidMount() {
        const { location } = this.props
        const params = queryString.parse(location.search);
        if (Object.keys(params).length) {
            this.getSearch(params.userName)
        } else {
            this.getSearch()
        }
    }
    handleSearchOnSubmit = () => {
        this.getSearch()
        this.setState({
            page: 1,
            movies: []
        })
    };
    getSearch = async (search='dog') => {
        const { page } = this.state;
        const { errorToggle, loaderToggle } = this;

        const url = await createSearch(search, page);

        try {
            const result = await request('get', url)
            this.updateUsers(result.results)
        } catch (error) {
            errorToggle(true);
        } finally {
            loaderToggle(false);
        }

    }
    updateUsers = (movies) => {
        this.setState({ movies })
    }
    errorToggle = (status) => {
        this.setState({ error: status })
    }
    loaderToggle = (status) => {
        this.setState({ loader: status })
    }
    inputHendler = ({ target }) => {
        const { value } = target;
        this.setState({ search: value })
    }
    resetForm = () => {
        this.setState({ search: '' })
    }
    render() {

        const { movies, search, loader, error } = this.state
        return (
            <>
                {loader && <Loader type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} />}
                {!loader && !error &&
                    <>
                        <Form onToSubmit={this.getSearch} search={search} resetForm={this.resetForm} inputHendler={this.inputHendler} />
                        <List movies={movies} />
                    </>
                }
            </>
        );
    }
}

export default Movie;