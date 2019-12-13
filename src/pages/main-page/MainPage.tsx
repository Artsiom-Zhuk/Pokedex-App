import React, { SyntheticEvent } from 'react';

import InputSearch from '../../components/input-search/InputSearch';

const MainPage: React.FunctionComponent = () => {
  const handleChange = (e: SyntheticEvent): void => {
    const element = e.currentTarget as HTMLInputElement;
    console.log(element.value);
  };

  return (
    <>
      <h1>Main Page</h1>
      <InputSearch
        placeholder="Search Pokemon"
        handleChange={handleChange}
      />
    </>
  );
};

export default MainPage;
