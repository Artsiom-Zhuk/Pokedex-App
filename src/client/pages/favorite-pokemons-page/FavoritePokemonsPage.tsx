
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import SearchViewContainer from '../../components/search-view-container/SearchViewContainer';

import { FavoritePokemonsPageProps, MapStateToProps } from './types';

class FavoritePokemonsPage extends PureComponent<FavoritePokemonsPageProps> {
  render(): JSX.Element {
    const { favorite } = this.props;

    return (
      <SearchViewContainer
        pokemons={favorite}
        isFavoritePage
      />
    );
  }
}

const mapStateToProps = (state: MapStateToProps): MapStateToProps => ({
  allPokemons: state.allPokemons,
  favorite: state.favorite,
});

export default connect(mapStateToProps)(FavoritePokemonsPage);
