function Delete(props){

  const handleClick =(ev)=>{
    console.log('promo paz')
    console.log(ev.target.id);
    props.deleteRepo(ev.target.id);
  }

return(
  <button onClick={handleClick} id={props.id}>
    X
  </button>
)
}
export default Delete;