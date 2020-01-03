import React, { Component } from 'react';

import LineDescription from '../../components/line-description/LineDescription';

import {
  MatchProps, Stat, Move, Characteristic,
} from './types';

import './CertainPokemonPage.scss';


class CertainPokemonPage extends Component<MatchProps> {
  state = {
    textDescription: `What made Pokemon so popular? Certainly the fact that Pokemon is adorable is a contributing
    factor. But looking back on Pokemon original design reveals a plumper, somewhat different form than the
    Pokemon of today.`,
    tab: 'bio',
    imgUrl: '',
    characteristics: [
      {
        id: 'deFense1$#', title1: 'Type', value1: '', title2: 'Defense', value2: '',
      },
      {
        id: 'pokedExiD16%', title1: 'Height', value1: '', title2: 'Pokedex ID', value2: '',
      },
      {
        id: 'basEAttAck12#', title1: 'Weight', value1: '', title2: 'Base Attack', value2: '',
      },
    ],
    moves: [],
  }

  async componentDidMount(): Promise<void> {
    const { match } = this.props;
    const pokemonName = match.params.name;
    const responsePokemonInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const dataPokemonInfo = await responsePokemonInfo.json();
    const defense = dataPokemonInfo.stats.filter((stat: Stat) => stat.stat.name === 'defense');
    const attack = dataPokemonInfo.stats.filter((stat: Stat) => stat.stat.name === 'attack');
    const moves = dataPokemonInfo.moves.map((move: Move) => move.move.name);

    this.setState({
      imgUrl: dataPokemonInfo.sprites.front_default || dataPokemonInfo.sprites.front_female,
      moves,
      characteristics: [
        {
          id: 'deFense1$#', title1: 'Type', value1: dataPokemonInfo.types[0].type.name, title2: 'Defense', value2: defense[0].base_stat,
        },
        {
          id: 'pokedExiD16%', title1: 'Height', value1: dataPokemonInfo.height, title2: 'Pokedex ID', value2: dataPokemonInfo.id,
        },
        {
          id: 'basEAttAck12#', title1: 'Weight', value1: dataPokemonInfo.weight, title2: 'Base Attack', value2: attack[0].base_stat,
        },
      ],
    });
  }

  changeTab = (tab: string): void => {
    this.setState({ tab });
  }

  render(): JSX.Element {
    const {
      tab, imgUrl, textDescription, moves, characteristics,
    } = this.state;

    return (
      <div className="certain-pokemon-page">
        <div className="certain-pokemon-page__container-btns">
          <div
            className="certain-pokemon-page__container-btn"
            onClick={this.changeTab.bind(this, 'bio')}
            style={{ backgroundColor: tab === 'bio' ? 'palevioletred' : '' }}
          >
            <a href="/" className="certain-pokemon-page__btn" onClick={(e): void => e.preventDefault()}>Bio</a>
          </div>
          <div
            className="certain-pokemon-page__container-btn"
            onClick={this.changeTab.bind(this, 'moves')}
            style={{ backgroundColor: tab === 'moves' ? 'palevioletred' : '' }}
          >
            <a href="/" className="certain-pokemon-page__btn" onClick={(e): void => e.preventDefault()}>Moves</a>
          </div>
        </div>
        {tab === 'bio' && (
          <div className="certain-pokemon-page__container-description-pokemon">
            <div className="certain-pokemon-page__line-description">
              <div className="certain-pokemon-page__description-img" style={{ backgroundImage: `url(${imgUrl})` }} />
              <div className="certain-pokemon-page__description-text">
                {textDescription}
              </div>
            </div>
            {characteristics.map((characteristic: Characteristic) => (
              <LineDescription
                key={characteristic.id}
                title1={characteristic.title1}
                value1={characteristic.value1}
                title2={characteristic.title2}
                value2={characteristic.value2}
              />
            ))}
          </div>
        )}
        {tab === 'moves' && (
          <div className="certain-pokemon-page__container-list-moves">
            <h3 className="certain-pokemon-page__title-list-moves">Moves</h3>
            <ul className="certain-pokemon-page__list-moves">
              {moves.map((move: string, index: number) => (
                <li key={index}>{move}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default CertainPokemonPage;
