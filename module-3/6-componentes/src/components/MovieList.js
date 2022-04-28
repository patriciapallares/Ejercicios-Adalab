import MovieItem from './MovieItem';
import '../styles/moviesList'
// pasamos datos, no procesos
// no podemos pasar por props un map

function MovieList(props) {
  const htmlMovies = props.moviesList.map((movieItem) => {
    return <MovieItem movie={movieItem} />;
  });

  return (
    <>
      <ul className='movies__list'>{htmlMovies}</ul>
    </>
  );
}

export default MovieList;
