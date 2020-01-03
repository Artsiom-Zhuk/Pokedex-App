import React, { Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';

import { addPokemon, removePokemon } from '../../store/actions';
import { PokemonCardProps, MapStateToProps, Pokemon } from './types';

import './PokemonCard.scss';

class PokemonCard extends Component<PokemonCardProps & RouteComponentProps> {
  state = {
    imageUrl: '',
  }

  async componentDidMount(): Promise<void> {
    const { infoUrl } = this.props;
    const responsePokemonData = await fetch(`${infoUrl}`);
    const pokemonData = await responsePokemonData.json();
    this.setState({
      imageUrl: pokemonData.sprites.front_default,
    });
  }

  addRemoveFavorite = (infoUrl: string, name: string, e: SyntheticEvent): void => {
    e.preventDefault();
    const { favorite, dispatch } = this.props;
    const isFavoritePokemon = favorite.some((favoritePokemon: Pokemon) => favoritePokemon.url === infoUrl);
    if (isFavoritePokemon) {
      dispatch(removePokemon(infoUrl));
    } else {
      dispatch(addPokemon(infoUrl, name));
    }
  }

  render(): JSX.Element {
    const { name, infoUrl, symbol } = this.props;
    const { imageUrl } = this.state;

    return (
      <Link to={`/certain-pokemon/${name}`} style={{ outline: 'none', textDecoration: 'none' }}>
        <div className="pokemon-card">
          <div
            className="pokemon-card__img-container"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div>
              <button
                className="pokemon-card__btn-add-remove"
                onClick={this.addRemoveFavorite.bind(this, infoUrl, name)}
                type="button"
              >
                {symbol}
              </button>
            </div>
          </div>
          <div className="pokemon-card__name-container">
            {name}
          </div>
        </div>
      </Link>
    );
  }
}

const mapStateToProps = (state: MapStateToProps): MapStateToProps => ({
  favorite: state.favorite,
});

export default withRouter(connect(mapStateToProps)(PokemonCard));
