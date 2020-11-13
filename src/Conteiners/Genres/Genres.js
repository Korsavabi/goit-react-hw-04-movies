import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { withCredentials, request } from '../../helpers/request';
import './Genres.css';

class Genres extends Component {
    state = {
        genres: [],
        loader: true,
        error: false,
    }
    componentDidMount() {
        this.getGenres()
    }
    getGenres = async () => {

        const url = withCredentials(`https://api.themoviedb.org/3/genre/movie/list?`);
        try {
            const result = await request('get', url);
            this.updateGenres(result.genres)
        } catch (error) {
            this.errorToggle(true)
        } finally {
            this.loaderToggle(false)
        }
    }
    updateGenres = (genres) => {
        this.setState({ genres })
    }
    loaderToggle = (status) => {
        this.setState({ loader: status })
    }
    errorToggle = (status) => {
        this.setState({ error: status })
    }
    genreClick = (e) => {
        return  this.props.history.push({ pathname:'/movie', search: `userName=${e.target.textContent}`})
      }
    render() {
        const {genres, loader} = this.state
        return (
            <>
              {loader && <Loader type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} />}
            <ul className='genre__list'>
                {genres.map(genre => <li className='genre__list-item' key={genre.id}><a onClick={this.genreClick} className='genre__list-item-link'>{genre.name}</a></li>)}
            </ul>
            </>
        );
    }
}

export default Genres;