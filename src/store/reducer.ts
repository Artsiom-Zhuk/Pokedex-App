import { actionTypes } from './actions';

const favoritePokemonsFromLocalStorage = window.localStorage.getItem('favoritePokemons');

export const initialState = {
  allPokemons: [],
  favorite: favoritePokemonsFromLocalStorage ? JSON.parse(favoritePokemonsFromLocalStorage) : []
};

export const reducer = (state: any = initialState, action: any): any => {
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
      let pos = null;
      state.favorite.map((o: any, index: any) => {
        if (o.url === action.url) {
          pos = index;
        }
      })
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
