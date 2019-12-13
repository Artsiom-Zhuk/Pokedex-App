import React from 'react';

import './PokemonCard.scss';

interface PokemonCardProps {
  name?: string;
  url?: string;
}

const PokemonCard: React.FunctionComponent<PokemonCardProps> = ({ name, url }) => (
  <div className="pokemon-card">
    <div
      className="pokemon-card__img-container"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div>
        <a href="/" className="pokemon-card__btn-add-remove">+</a>
      </div>
    </div>
    <div className="pokemon-card__name-container">
      {name}
    </div>
  </div>
);

export default PokemonCard;
