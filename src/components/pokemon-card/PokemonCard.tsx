import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPokemon, removePokemon } from '../../store/actions';

import './PokemonCard.scss';

interface PokemonCardProps {
  name?: string;
  infoUrl?: string;
  symbol?: string;
  favorite?: any;
  dispatch?: any;
}

class PokemonCard extends Component<PokemonCardProps> {

  state = {
    imageUrl: '',
  }

  addRemoveFavorite = (infoUrl: string, e: any) => {
    e.preventDefault();
    if (this.props.favorite.includes(infoUrl)) {
      this.props.dispatch(removePokemon(infoUrl));
    } else {
      this.props.dispatch(addPokemon(infoUrl));
    }

    console.log(infoUrl);
  }

  async componentDidMount() {
    const response = await fetch(`${this.props.infoUrl}`);
    const data = await response.json();
    this.setState({
      imageUrl: data.sprites.front_default
    });
  }

  render() {
    return (
      <div className="pokemon-card">
        <div
          className="pokemon-card__img-container"
          style={{ backgroundImage: `url(${this.state.imageUrl})` }}
        >
          <div>
            <a href="/" className="pokemon-card__btn-add-remove" onClick={this.addRemoveFavorite.bind(this, this.props.infoUrl)}>
              {this.props.symbol}
            </a>
          </div>
        </div>
        <div className="pokemon-card__name-container">
          {this.props.name}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state: any) => ({
  favorite: state.favorite
});

export default connect(mapStateToProps)(PokemonCard);
