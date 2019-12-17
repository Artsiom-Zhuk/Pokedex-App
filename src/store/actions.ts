import { Dispatch } from 'react';
import { Pokemon } from '../types/types';

export enum actionTypes {
  ADD_POKEMON = 'ADD_POKEMON',
  REMOVE_POKEMON = 'REMOVE_POKEMON',
  FETCH_ALL_POKEMONS = 'FETCH_ALL_POKEMONS',
  REMOVE_ALL_FAVORITE_POKEMONS = 'REMOVE_ALL_FAVORITE_POKEMONS',
}

interface AddPokemon {
  type: typeof actionTypes.ADD_POKEMON;
  url: string;
  name: string;
}

interface RemovePokemon {
  type: typeof actionTypes.REMOVE_POKEMON;
  url: string;
}

interface RemoveAllFavoritePokemons {
  type: typeof actionTypes.REMOVE_ALL_FAVORITE_POKEMONS;
}

export interface FetchAllPokemons {
  type: typeof actionTypes.FETCH_ALL_POKEMONS;
  arrPokemons: Pokemon[];
}

export const addPokemon = (url: string, name: string): AddPokemon => ({ type: actionTypes.ADD_POKEMON, url, name });
export const removePokemon = (url: string): RemovePokemon => ({ type: actionTypes.REMOVE_POKEMON, url });
export const removeAllFavoritePokemons = (): RemoveAllFavoritePokemons => ({ type: actionTypes.REMOVE_ALL_FAVORITE_POKEMONS });
export const fetchAllPokemons = () => async (dispatch: Dispatch<ActionsTypes>): Promise<void> => {
  const responseAllPokemons = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000');
  const dataAllPokemons = await responseAllPokemons.json();
  dispatch({ type: actionTypes.FETCH_ALL_POKEMONS, arrPokemons: dataAllPokemons.results });
};

export type ActionsTypes = AddPokemon
| RemovePokemon
| RemoveAllFavoritePokemons
| FetchAllPokemons;
