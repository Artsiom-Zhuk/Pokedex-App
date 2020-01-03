import { ThunkDispatch } from 'redux-thunk';

import { Pokemon } from '../../types/types';
import { FetchAllPokemons } from '../../store/actions';


export interface MainPageProps {
  allPokemons: Pokemon[];
  dispatch: ThunkDispatch<{}, {}, FetchAllPokemons>;
}

export interface MapStateToProps {
  allPokemons: Pokemon[];
}
