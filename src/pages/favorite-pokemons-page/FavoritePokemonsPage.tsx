
import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchViewContainer from '../../components/search-view-container/SearchViewContainer';

interface FavoritePokemonsPageProps {
  allPokemons: any,
  dispatch: any,
  favorite: any
}

class FavoritePokemonsPage extends Component<FavoritePokemonsPageProps> {

  componentDidMount() {
    const { dispatch } = this.props;

  }

  render() {
    return (
      <SearchViewContainer 
        pokemons={this.props.favorite}
        isFavorite={true}
      />
    );
  }
};

const mapStateToProps = (state: any) => ({
  allPokemons: state.allPokemons,
  favorite: state.favorite
});

export default connect(mapStateToProps)(FavoritePokemonsPage);
