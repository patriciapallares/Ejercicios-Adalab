function User(props) {
  return (
    <a href='#top'>
      <img
        className=''
        src={props.user.image.large}
        alt={props.user.fullname}
      />
      <h4 className='card__title'>{props.user.fullname}</h4>
      <p className='card__description'>{props.user.age}</p>
    </a>
  );
}

export default User;
