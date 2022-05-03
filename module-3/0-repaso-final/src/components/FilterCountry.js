function FilterCountry(props) {

  const handleChange = (ev) => {
    props.handleFilterCountry(ev.target.value)
  }

  return (
    <>
      <label>País</label>
      <select name='' onChange={handleChange} >
        <option value='United States'>United States</option>
        <option value='Ireland'>Ireland</option>
        <option value='Spain'>Spain</option>
      </select>
    </>
  );
}

export default FilterCountry;
