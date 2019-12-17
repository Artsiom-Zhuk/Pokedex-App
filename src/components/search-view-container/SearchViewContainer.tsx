import React, { Component, SyntheticEvent } from 'react';
import { connect } from 'react-redux';

import InputSearch from '../input-search/InputSearch';
import PokemonCard from '../pokemon-card/PokemonCard';

import { removeAllFavoritePokemons } from '../../store/actions';
import { Pokemon, SearchViewContainerProps, MapStateToProps } from './types';
import './SearchViewContainer.scss';

class SearchViewContainer extends Component<SearchViewContainerProps> {
  state = {
    currentValue: '',
    queryParamOffset: 20,
  }

  ref = React.createRef<HTMLDivElement>();

  componentDidMount(): void {
    if (this.ref.current) {
      this.ref.current.addEventListener('scroll', this.changeScroll);
    }
  }

  componentWillUnmount(): void {
    if (this.ref.current) {
      this.ref.current.removeEventListener('scroll', this.changeScroll);
    }
  }

  handleChange = (e: SyntheticEvent): void => {
    const element = e.currentTarget as HTMLInputElement;
    const { value } = element;
    this.setState({
      currentValue: value,
    });
  };

  changeScroll = (e: Event): void => {
    /**
     toBottom - how many pixels are left until the end of the scroll
     */
    const target = e.target as HTMLElement;
    const { queryParamOffset } = this.state;
    const toBottom = target.scrollHeight - (target.scrollTop + target.clientHeight);
    if (toBottom < 10) {
      this.setState({
        queryParamOffset: queryParamOffset + 20,
      });
    }
  }

  removeAllFavoritePokemons = (): void => {
    const { dispatch } = this.props;
    dispatch(removeAllFavoritePokemons());
  }

  render(): JSX.Element {
    const { pokemons, isFavoritePage, favorite } = this.props;
    const { queryParamOffset, currentValue } = this.state;
    const chunkPokemons = pokemons.slice(0, queryParamOffset);

    return (
      <div className="search-view-container" ref={this.ref}>
        <div className="search-view-container__search-input">
          <InputSearch
            handleChange={this.handleChange}
            placeholder="Search Pokemon"
          />
          {isFavoritePage && (
            <button
              className="search-view-container__remove-all-btn"
              onClick={this.removeAllFavoritePokemons}
              type="button"
            >
            Clear All
            </button>
          )}
        </div>
        <div className="search-view-container__view-cards">
          {
            chunkPokemons.map((pokemon: Pokemon): JSX.Element | null => {
              if (pokemon.name.toLowerCase().indexOf(currentValue.toLowerCase()) !== -1) {
                return (
                  <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    infoUrl={pokemon.url}
                    symbol={isFavoritePage
                      ? '-'
                      : favorite.some((favoritePokemon: Pokemon) => favoritePokemon.url === pokemon.url)
                        ? '-'
                        : '+'}
                  />
                );
              }
              return null;
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: MapStateToProps): MapStateToProps => ({
  favorite: state.favorite,
});

export default connect(mapStateToProps)(SearchViewContainer);
