import React, { PureComponent } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import CertainPokemonPage from '../pages/certain-pokemon-page/CertainPokemonPage';
import FavoritePokemonsPage from '../pages/favorite-pokemons-page/FavoritePokemonsPage';
import MainPage from '../pages/main-page/MainPage';
import Header from './header/Header';

import './App.scss';

export default class App extends PureComponent {
  render(): JSX.Element {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={MainPage} />
          <Route path="/favorite-pokemons/" component={FavoritePokemonsPage} />
          <Route path="/certain-pokemon/" component={CertainPokemonPage} />
        </div>
      </Router>
    );
  }
}
