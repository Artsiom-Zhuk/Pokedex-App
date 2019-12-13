import React, { SyntheticEvent } from 'react';
import './InputSearch.scss';

interface InputSearchProps {
  handleChange?(e: SyntheticEvent): void;
  placeholder?: string;
}

const InputSearch: React.FunctionComponent<InputSearchProps> = ({
  handleChange,
  placeholder,
}): JSX.Element => (
  <input
    className="input-search"
    onChange={handleChange}
    placeholder={placeholder}
  />
);

export default InputSearch;
