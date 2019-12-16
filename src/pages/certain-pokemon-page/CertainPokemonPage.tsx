import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import LineDescription from '../../components/line-description/LineDescription';

import './CertainPokemonPage.scss';

interface MatchParams {
  name: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> { }

interface Stat {
  stat: {
    name: string;
  };
}

interface Move {
  move: {
    name: string;
  };
}

interface Characteristic {
  title1: string;
  value1: string;
  title2: string;
  value2: string;
}

class CertainPokemonPage extends Component<MatchProps> {

  state = {
    textDescription: 'et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla',
    tab: 'bio',
    imgUrl: '',
    characteristics: [
      { title1: 'Type', value1: '', title2: 'Defense', value2: '' },
      { title1: 'Height', value1: '', title2: 'Pokedex ID', value2: '' },
      { title1: 'Weight', value1: '', title2: 'Base Attack', value2: '' },
    ],
    moves: []
  }

  async componentDidMount() {
    const { match } = this.props;
    const pokemonName = match.params.name;
    const responsePokemonInfo = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const dataPokemonInfo = await responsePokemonInfo.json();
    const defense = dataPokemonInfo.stats.filter((stat: Stat) => stat.stat.name === 'defense');
    const attack = dataPokemonInfo.stats.filter((stat: Stat) => stat.stat.name === 'attack');
    const moves = dataPokemonInfo.moves.map((move: Move) => move.move.name)

    this.setState({
      imgUrl: dataPokemonInfo.sprites.front_default || dataPokemonInfo.sprites.front_female,
      moves: moves,
      characteristics: [
        { title1: 'Type', value1: dataPokemonInfo.types[0].type.name, title2: 'Defense', value2: defense[0].base_stat },
        { title1: 'Height', value1: dataPokemonInfo.height, title2: 'Pokedex ID', value2: dataPokemonInfo.id },
        { title1: 'Weight', value1: dataPokemonInfo.weight, title2: 'Base Attack', value2: attack[0].base_stat },
      ],
    })
  }

  changeTab = (tab: string) => {
    this.setState({ tab })
  }

  render() {
    const { tab, imgUrl, textDescription, moves, characteristics } = this.state;

    return (
      <div className="certain-pokemon-page">
        <div className="certain-pokemon-page__container-btns" >
          <div
            className="certain-pokemon-page__container-btn"
            onClick={this.changeTab.bind(this, 'bio')}
            style={{ backgroundColor: tab === 'bio' ? 'palevioletred' : '' }}
          >
            <a href="/" className="certain-pokemon-page__btn" onClick={(e) => e.preventDefault()}>Bio</a>
          </div>
          <div
            className="certain-pokemon-page__container-btn"
            onClick={this.changeTab.bind(this, 'moves')}
            style={{ backgroundColor: tab === 'moves' ? 'palevioletred' : '' }}
          >
            <a href="/" className="certain-pokemon-page__btn" onClick={(e) => e.preventDefault()}>Moves</a>
          </div>
        </div>
        {tab === 'bio' && <div className="certain-pokemon-page__container-description-pokemon">
          <div className="certain-pokemon-page__line-description">
            <div className="certain-pokemon-page__description-img" style={{ backgroundImage: `url(${imgUrl})` }} />
            <div className="certain-pokemon-page__description-text">
              {textDescription}
            </div>
          </div>
          {characteristics.map((characteristic: Characteristic, index: number) => (
            <LineDescription
              key={index}
              title1={characteristic.title1}
              value1={characteristic.value1}
              title2={characteristic.title2}
              value2={characteristic.value2}
            />
          ))}
        </div>
        }
        {tab === 'moves' && <div className="certain-pokemon-page__container-list-moves">
          <h3>Moves</h3>
          <ul className="certain-pokemon-page__list-moves">
            {moves.map((move: string, index: number) => (
              <li key={index}>{move}</li>
            ))}
          </ul>
        </div>
        }
      </div>
    );
  }
};

export default CertainPokemonPage;
