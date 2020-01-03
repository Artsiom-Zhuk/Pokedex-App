import { Dispatch } from 'react';
import { ActionsTypes } from '../../store/actions';
import { Pokemon } from '../../types/types';


export { Pokemon } from '../../types/types';

export interface PokemonCardProps {
  name: string;
  infoUrl: string;
  symbol: string;
  favorite: Pokemon[];
  dispatch: Dispatch<ActionsTypes>;
}

export interface MapStateToProps {
  favorite: Pokemon[];
}
