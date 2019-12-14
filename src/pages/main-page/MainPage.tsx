import React, { SyntheticEvent } from 'react';

import SearchViewContainer from '../../components/search-view-container/SearchViewContainer';

const MainPage: React.FunctionComponent = () => {
  // const handleChange = (e: SyntheticEvent): void => {
  //   const element = e.currentTarget as HTMLInputElement;
  //   console.log(element.value);
  // };

  return (
    <SearchViewContainer />
  );
};

export default MainPage;
