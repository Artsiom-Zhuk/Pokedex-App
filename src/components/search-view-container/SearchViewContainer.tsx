import React, { Component, SyntheticEvent } from 'react';

import InputSearch from '../../components/input-search/InputSearch';
import PokemonCard from '../../components/pokemon-card/PokemonCard';

import './SearchViewContainer.scss'

export class SearchViewContainer extends Component<{}> {

  state = {
    currentValue: ''
  }

  handleChange = (e: SyntheticEvent): void => {
    const element = e.currentTarget as HTMLInputElement;
    this.setState({
      currentValue: element.value
    });
  };

  render() {
    const arr = ['Pokemon1', 'Pokemon2', 'Pokemon3', 'Pokemon4', 'Pokemon5', 'Pokemon6', 'Pokemon7', 'Pokemon8', 'gghh12$3'];
    return (
      <div className="search-view-container">
        <div className="search-view-container__search-input">
          <InputSearch
            handleChange={this.handleChange}
          />
        </div>
        <div className="search-view-container__view-cards">
          {
            arr.map((name: string, index: number): any => {
              if (name.toLowerCase().indexOf(this.state.currentValue.toLowerCase()) !== -1) {
                return (
                  <PokemonCard
                    key={index}
                    url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
                    name={name}
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

export default SearchViewContainer;
