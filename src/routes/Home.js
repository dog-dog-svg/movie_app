import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const [genreRes, movieRes] = await Promise.all([
      axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=ko-KR`),
      axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`),
    ]);

    const genreMap = {};
    genreRes.data.genres.forEach(g => { genreMap[g.id] = g.name; });

    const movies = movieRes.data.results.map(movie => ({
      id: movie.id,
      title: movie.title,
      year: parseInt(movie.release_date?.slice(0, 4) || '0'),
      summary: movie.overview || '',
      poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
      genres: movie.genre_ids.map(id => genreMap[id]).filter(Boolean),
    }));

    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.poster}
                genres={movie.genres}
                vote_count={movie.vote_count}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
