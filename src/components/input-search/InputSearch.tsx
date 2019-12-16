import React, { SyntheticEvent } from 'react';

import './InputSearch.scss';

interface InputSearchProps {
  handleChange(e: SyntheticEvent): void;
  placeholder?: string;
}

const InputSearch: React.FunctionComponent<InputSearchProps> = ({
  handleChange,
  placeholder,
}): JSX.Element => (
  <>
  <img
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
