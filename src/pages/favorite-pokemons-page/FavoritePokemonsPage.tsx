
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchViewContainer from '../../components/search-view-container/SearchViewContainer';

interface FavoritePokemonsPageProps {
  allPokemons: Pokemon[];
  favorite: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}

interface MapStateToProps {
  allPokemons: Pokemon[];
  favorite: Pokemon[];
}

class FavoritePokemonsPage extends Component<FavoritePokemonsPageProps> {
  render() {
    const {favorite} = this.props;

    return (
      <SearchViewContainer 
        pokemons={favorite}
        isFavoritePage={true}
      />
    );
  }
};

const mapStateToProps = (state: MapStateToProps) => ({
  allPokemons: state.allPokemons,
  favorite: state.favorite
});

export default connect(mapStateToProps)(FavoritePokemonsPage);
