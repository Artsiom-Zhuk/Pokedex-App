import React from 'react';

import { InputSearchProps } from './types';

import './InputSearch.scss';

const InputSearch: React.FunctionComponent<InputSearchProps> = ({
  handleChange,
  placeholder,
}): JSX.Element => (
  <>
    <img
      alt="search icon"
      src="https://img.icons8.com/ios-glyphs/32/000000/search.png"
      className="input-search__loupe-icon"
    />
    <input
      className="input-search"
      onChange={handleChange}
      placeholder={placeholder}
    />
  </>
);

export default InputSearch;
