import User from './User';

function UserList(props) {
  // hacemos map para tener un array de <li>

  const userElements = props.users.map((user) => {
    return (
      <li className='card'>
        <User user={user} />
      </li>
    );
  });

  return (
    <section>
      <ul className='cards'>{userElements}</ul>
    </section>
  );
}

export default UserList;
