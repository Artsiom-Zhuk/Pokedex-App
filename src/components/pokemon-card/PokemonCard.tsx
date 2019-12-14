import React, { Component } from 'react';

import './PokemonCard.scss';
import { render } from 'react-dom';

interface PokemonCardProps {
  name?: string;
  infoUrl?: string;
}

class PokemonCard extends Component<PokemonCardProps> {

  state = {
    imageUrl: ''
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
            <a href="/" className="pokemon-card__btn-add-remove">+</a>
          </div>
        </div>
        <div className="pokemon-card__name-container">
          {this.props.name}
        </div>
      </div>
    )
  }

};

export default PokemonCard;
