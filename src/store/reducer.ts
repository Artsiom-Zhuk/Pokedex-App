import { actionTypes } from './actions';

const favoritePokemonsFromLocalStorage = window.localStorage.getItem('favoritePokemons');

export const initialState = {
  allPokemons: [],
  favorite: favoritePokemonsFromLocalStorage ? JSON.parse(favoritePokemonsFromLocalStorage) : []
};

export const reducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case actionTypes.ADD_POKEMON: {

      const favoritePokemons = JSON.stringify([...state.favorite, action.url]);
      window.localStorage.setItem('favoritePokemons', favoritePokemons);

      return {
        ...state,
        favorite: [...state.favorite, action.url],
      };
    }

    case actionTypes.REMOVE_POKEMON: {
      const pos = state.favorite.indexOf(action.url);
      state.favorite.splice(pos, 1);

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
