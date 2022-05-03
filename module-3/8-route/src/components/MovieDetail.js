// vamos a usar el hook useLocation para que Detai sepa qué ID tiene su peli por su ruta
function MovieDetail(props) {
  return (<>
  <h2>Información de la peli</h2>
      <li key={props.movie.id} className='movies__item'>
        <h2 className='movies__title'>{props.movie.name}</h2>
        <p>{props.movie.synopsis}</p>
      </li>

  </>);
}

export default MovieDetail;
