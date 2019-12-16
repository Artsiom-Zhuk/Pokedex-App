import React, { Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';

import InputSearch from '../../components/input-search/InputSearch';
import PokemonCard from '../../components/pokemon-card/PokemonCard';

import './SearchViewContainer.scss'

interface SearchViewContainerProps {
  pokemons: Pokemon[];
  favorite: Pokemon[];
  isFavoritePage?: boolean;
}

interface Pokemon {
  name: string;
  url: string;
}

interface MapStateToProps {
  favorite: Pokemon[];
}

export class SearchViewContainer extends Component<SearchViewContainerProps> {

  state = {
    currentValue: '',
    queryParamOffset: 20
  }

  ref = React.createRef<HTMLDivElement>();

  componentDidMount() {
    this.ref.current && this.ref.current.addEventListener('scroll', this.changeScroll);
  }

  componentWillUnmount() {
    this.ref.current && this.ref.current.removeEventListener('scroll', this.changeScroll);
  }

  handleChange = (e: SyntheticEvent) => {
    const element = e.currentTarget as HTMLInputElement;
    const value = element.value;
    this.setState({
      currentValue: value
    });
  };

  changeScroll = (e: any) => {
    /**
     toBottom - how many pixels are left until the end of the scroll
     */ 
    const { queryParamOffset} = this.state;
    const toBottom = e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight);
    if (toBottom < 10) {
      this.setState({
        queryParamOffset: queryParamOffset + 20
      })
    }
  }

  render() {
    const { pokemons, isFavoritePage, favorite } = this.props;
    const { queryParamOffset, currentValue } = this.state;
    const chunkPokemons = pokemons.slice(0, queryParamOffset);

    return (
      <div className="search-view-container" ref={this.ref}>
        <div className="search-view-container__search-input">
          <InputSearch
            handleChange={this.handleChange}
            placeholder={'Search Pokemon'}
          />
        </div>
        <div className="search-view-container__view-cards">
          {
            chunkPokemons.map((pokemon: Pokemon, index: number): JSX.Element | void => {
              if (pokemon.name.toLowerCase().indexOf(currentValue.toLowerCase()) !== -1) {
                return (
                  <PokemonCard
                    key={index}
                    name={pokemon.name}
                    infoUrl={pokemon.url}
                    symbol={isFavoritePage
                      ? '-'
                      : favorite.some((favoritePokemon: Pokemon) => favoritePokemon.url === pokemon.url)
                        ? '-'
                        : '+'
                    }
                  />
                )
              }
            })
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: MapStateToProps) => ({
  favorite: state.favorite
});

export default connect(mapStateToProps)(SearchViewContainer);
