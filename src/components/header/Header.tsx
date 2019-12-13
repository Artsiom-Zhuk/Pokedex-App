import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './Header.scss';

const Header = (): JSX.Element => (
  <div className="header">
    <div className="header__btn-container">
      <Link to="/" className="header__link">
            Main
      </Link>
      <Link to="/favorite-pokemons/" className="header__link">
            Favorite
      </Link>
    </div>
  </div>
);

export default withRouter(Header);
