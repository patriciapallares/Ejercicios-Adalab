function MovieInput(props) {
  const handleInput = (ev) => {
    const nombreInput = ev.target.id;
    const valueInput = ev.target.value;
    props.changeData(nombreInput, valueInput);
  };

  return (
    <>
      <label htmlFor=''>{props.name}</label>
      <input
        type='text'
        id={props.id}
        value={props.value}
        onChange={handleInput}
      />
    </>
  );
}

export default MovieInput;
