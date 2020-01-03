import { Pokemon } from '../../types/types';

export interface FavoritePokemonsPageProps {
  allPokemons: Pokemon[];
  favorite: Pokemon[];
}

export interface MapStateToProps {
  allPokemons: Pokemon[];
  favorite: Pokemon[];
}
