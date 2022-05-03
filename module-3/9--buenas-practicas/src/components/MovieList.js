import '../styles/MovieList.scss';
import MovieItem from './MovieItem';
import PropTypes from 'prop-types';

function MovieList(props) {

  const { MovieList } = props;

  const htmlMovies = MovieList.map((movieItem, index) => {
    return <MovieItem className='movies__list' key={index} movie={movieItem} />;
  });

  return (
    <>
      {MovieList.length === 0 ? (
        <p>Cargando datos...</p>
      ) : (
        <ul className='movies__list'>{htmlMovies}</ul>
      )}
    </>
  );
}

MovieList.defaultProps = {
  MovieList: [],
};

MovieList.propTypes = {
  MovieList: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
