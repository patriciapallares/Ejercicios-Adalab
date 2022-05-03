function User(props) {
  return (
    <a href='#'>
      <img
        src={props.user.image.large}
        className=''
        alt={props.user.fullname}
        title={props.user.fullname}
      />
      <h4 className='card__title'>{props.user.fullname}</h4>
      <p className='card__description'>{props.user.age}</p>
    </a>
  );
}

export default User;
