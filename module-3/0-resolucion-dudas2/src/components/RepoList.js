import Repo from './Repo'

function RepoList(props) {
  const result = props.listData.map((oneRepo, index)=> (<li key={index}>
    <Repo repo={oneRepo} deleteRepo={props.deleteRepo} />
  </li>));

  return <ul>{result}</ul>;
}

export default RepoList;
