import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchViewContainer from '../../components/search-view-container/SearchViewContainer';

import { fetchAllPokemons } from '../../store/actions'

interface MainPageProps {
  allPokemons: Pokemon[],
  dispatch: any
}

interface Pokemon {
  name: string;
  url: string;
}

class MainPage extends Component<MainPageProps> {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllPokemons());
  }

  render() {
    const { allPokemons } = this.props;

    return (
      <SearchViewContainer 
        pokemons={allPokemons}
      />
    );
  }
};

const mapStateToProps = (state: any) => ({
  allPokemons: state.allPokemons
});

export default connect(mapStateToProps)(MainPage);
