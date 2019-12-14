import { actionTypes } from './actions';

export const initialState = {
  allPokemons: [],
  favorite: []
};

export const reducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case actionTypes.ADD_POKEMON: {
      return {
        ...state,
        favorite: [...state.favorite, action.url],
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
