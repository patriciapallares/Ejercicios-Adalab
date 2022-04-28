import MovieInput from './MovieInput';

function MovieForm(props) {
  const handleNewMovie = (ev) => {
    ev.preventDefault();
    props.addMovie();
  };

  // const handleInput = (ev) => {
  //   const nombreInput = ev.target.id;
  //   const valueInput = ev.target.value;
  //   props.changeData(nombreInput, valueInput);
  // };

  return (
    <>
      <h2>Nueva peli:</h2>

      <form action=''>
        <MovieInput
          name='Nombre'
          id='name'
          value={props.newMovie.name}
          changeData={props.changeData}
        />

        <MovieInput
          name='Descripción'
          id='synopsis'
          value={props.newMovie.synopsis}
          changeData={props.changeData}
        />
{/* 
        <label htmlFor=''>Descripción</label>
        <input
          type='text'
          id='synopsis'
          value={props.newMovie.synopsis}
          onChange={handleInputs}
        /> */}

        <button onClick={handleNewMovie}>Guardar</button>
      </form>
    </>
  );
}

export default MovieForm;
