import { SyntheticEvent } from 'react';

export interface InputSearchProps {
  handleChange(e: SyntheticEvent): void;
  placeholder?: string;
}
