import React, { Component, SyntheticEvent } from 'react';

import InputSearch from '../../components/input-search/InputSearch';
import PokemonCard from '../../components/pokemon-card/PokemonCard';

import './SearchViewContainer.scss'

interface SearchViewContainerProps {
  pokemons: any
}

export class SearchViewContainer extends Component<SearchViewContainerProps> {

  state = {
    currentValue: '',
    queryOffset: 20
  }

  ref = React.createRef<HTMLDivElement>();

  handleChange = (e: SyntheticEvent): void => {
    const element = e.currentTarget as HTMLInputElement;
    this.setState({
      currentValue: element.value
    });
  };

  changeScroll = (e: any) => {
    /**
     toBottom - how many pixels are left until the end of the scroll
     */
    const toBottom = e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight);
    console.log(Math.floor(toBottom));
    if (toBottom < 10){
      this.setState({
        queryOffset: this.state.queryOffset + 20
      })
    }
  }

  componentDidMount() {
    this.ref.current && this.ref.current.addEventListener('scroll', this.changeScroll);
  }

  componentWillUnmount() {
    this.ref.current && this.ref.current.removeEventListener('scroll', this.changeScroll);
  }

  render() {
    const pokemons = this.props.pokemons.slice(0, this.state.queryOffset);
    return (
      <div className="search-view-container"  ref={this.ref}>
        <div className="search-view-container__search-input">
          <InputSearch
            handleChange={this.handleChange}
          />
        </div>
        <div className="search-view-container__view-cards">
          {
            pokemons.map((obj: any, index: number): any => {
              if (obj.name.toLowerCase().indexOf(this.state.currentValue.toLowerCase()) !== -1) {
                return (
                  <PokemonCard
                    key={index}
                    name={obj.name}
                    infoUrl={obj.url}
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
