import React, { SyntheticEvent } from 'react';

import InputSearch from '../../components/input-search/InputSearch';
import PokemonCard from '../../components/pokemon-card/PokemonCard';

const MainPage: React.FunctionComponent = () => {
  const handleChange = (e: SyntheticEvent): void => {
    const element = e.currentTarget as HTMLInputElement;
    console.log(element.value);
  };

  return (
    <>
      <h1>Main Page</h1>
      <InputSearch
        placeholder="Search Pokemon"
        handleChange={handleChange}
      />
      <PokemonCard
        name="Pikachu"
        url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/female/25.png"
      />
    </>
  );
};

export default MainPage;
