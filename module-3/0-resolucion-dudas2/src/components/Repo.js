import Delete from './Delete';

function Repo (props){
return (
  <article>
    <h2>{props.repo.full_name}</h2>
    <img src={props.repo.image}/>
    <Delete id={props.repo.id} deleteRepo={props.deleteRepo} />
  </article>
)
}

export default Repo;