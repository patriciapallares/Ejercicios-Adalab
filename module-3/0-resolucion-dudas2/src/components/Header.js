import React from 'react';
import '../styles/App.scss';

// yo puedo parametrizar mi componente para que si tiene unos u otros parámetros me haga unas u otras cosas

function Header(props) {
  return (
    <header className="header">
      {/* Recibe las dos propiedades? pues hace lo del paréntesis */}
      {props.subtitle && props.number ? (
        <>
          <h1 className="header__title">
            {props.number} {props.lesson}: {props.title}
          </h1>
          <h2 className="header__subtitle header__underline">
            {props.subtitle}
          </h2>
        </>
      ) : (
        <h1 className="header__title header__underline">
          {props.number} {props.lesson}: {props.title}
          {props.children}
        </h1>
      )}
    </header>
  );
}

export default Header;