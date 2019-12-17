import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
  name: string;
}

export type MatchProps = RouteComponentProps<MatchParams>

export interface Stat {
  stat: {
    name: string;
  };
}

export interface Move {
  move: {
    name: string;
  };
}

export interface Characteristic {
  id: string;
  title1: string;
  value1: string;
  title2: string;
  value2: string;
}
