import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchViewContainer from '../../components/search-view-container/SearchViewContainer';

import { fetchAllPokemons } from '../../store/actions';

import { MainPageProps, MapStateToProps } from './types';

class MainPage extends Component<MainPageProps> {
  componentDidMount(): void {
    const { dispatch } = this.props;
    dispatch(fetchAllPokemons());
  }

  render(): JSX.Element {
    const { allPokemons } = this.props;

    return (
      <SearchViewContainer
        pokemons={allPokemons}
      />
    );
  }
}

const mapStateToProps = (state: MapStateToProps): MapStateToProps => ({
  allPokemons: state.allPokemons,
});

export default connect(mapStateToProps)(MainPage);
