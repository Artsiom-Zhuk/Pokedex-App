import { actionTypes, ActionsTypes } from './actions';
import { Pokemon } from '../types/types';
import getItemFromLocalStorage from '../utils/getItemFromLocalStorage';
import setItemInLocalStorage from '../utils/setItemInLocalStorage';

const favoritePokemonsFromLocalStorage = getItemFromLocalStorage('favoritePokemons');

interface State {
  allPokemons: Pokemon[];
  favorite: Pokemon[];
}

export const initialState: State = {
  allPokemons: [],
  favorite: favoritePokemonsFromLocalStorage
    ? JSON.parse(favoritePokemonsFromLocalStorage)
    : [],
};

export const reducer = (state: State = initialState, action: ActionsTypes): State => {
  switch (action.type) {
    case actionTypes.ADD_POKEMON: {
      const favoritePokemons = JSON.stringify([...state.favorite, { url: action.url, name: action.name }]);
      setItemInLocalStorage('favoritePokemons', favoritePokemons);

      return {
        ...state,
        favorite: [...state.favorite, { url: action.url, name: action.name }],
      };
    }

    case actionTypes.REMOVE_POKEMON: {
      state.favorite.map((favoritePokemon: Pokemon, index: number): null => {
        if (favoritePokemon.url === action.url) {
          state.favorite.splice(index, 1);
        }
        return null;
      });

      const favoritePokemons = JSON.stringify([...state.favorite]);
      setItemInLocalStorage('favoritePokemons', favoritePokemons);

      return {
        ...state,
        favorite: [...state.favorite],
      };
    }

    case actionTypes.FETCH_ALL_POKEMONS: {
      return {
        ...state,
        allPokemons: action.arrPokemons,
      };
    }

    case actionTypes.REMOVE_ALL_FAVORITE_POKEMONS: {
      setItemInLocalStorage('favoritePokemons', JSON.stringify([]));
      return {
        ...state,
        favorite: [],
      };
    }

    default: {
      return state;
    }
  }
};
