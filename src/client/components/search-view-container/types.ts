import { Dispatch } from 'react';

import { ActionsTypes } from '../../store/actions';

import { Pokemon } from '../../types/types';

export { Pokemon } from '../../types/types';

export interface SearchViewContainerProps {
  pokemons: Pokemon[];
  favorite: Pokemon[];
  isFavoritePage?: boolean;
  dispatch: Dispatch<ActionsTypes>;
}

export interface MapStateToProps {
  favorite: Pokemon[];
}
