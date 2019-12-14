import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchViewContainer from '../../components/search-view-container/SearchViewContainer';

import { fetchAllPokemons } from '../../store/actions'

interface MainPageProps {
  allPokemons: any,
  dispatch: any
}

class MainPage extends Component<MainPageProps> {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAllPokemons());
  }

  render() {
    return (
      <SearchViewContainer 
        pokemons={this.props.allPokemons}
      />
    );
  }
};

const mapStateToProps = (state: any) => ({
  allPokemons: state.allPokemons
});

export default connect(mapStateToProps)(MainPage);
