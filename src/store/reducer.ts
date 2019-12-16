import { actionTypes } from './actions';

import getItemFromLocalStorage from '../utils/getItemFromLocalStorage';

const favoritePokemonsFromLocalStorage = getItemFromLocalStorage('favoritePokemons');

interface Pokemon {
  name: string;
  url: string;
}

interface State {
  allPokemons: Pokemon[];
  favorite: Pokemon[];
}

export const initialState = {
  allPokemons: [],
  favorite: favoritePokemonsFromLocalStorage 
    ? JSON.parse(favoritePokemonsFromLocalStorage)
    : []
};

export const reducer = (state: State = initialState, action: any): any => {
  switch (action.type) {
    case actionTypes.ADD_POKEMON: {

      const favoritePokemons = JSON.stringify([...state.favorite, {url: action.url, name: action.name}]);
      window.localStorage.setItem('favoritePokemons', favoritePokemons);

      return {
        ...state,
        favorite: [...state.favorite, {url: action.url, name: action.name}],
      };
    }

    case actionTypes.REMOVE_POKEMON: {
      state.favorite.map((favoritePokemon: Pokemon, index: number) => {
        if (favoritePokemon.url === action.url) {
          state.favorite.splice(index, 1);
        }
      })

      const favoritePokemons = JSON.stringify([...state.favorite]);
      window.localStorage.setItem('favoritePokemons', favoritePokemons);

      return {
        ...state,
        favorite: [...state.favorite],
      };
    }

    case actionTypes.FETCH_ALL_POKEMONS: {
      return {
       ...state,
       allPokemons: action.arrPokemons
      };
    }

    default: {
      return state;
    }
  }
}
