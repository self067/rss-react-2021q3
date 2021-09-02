import React from 'react';

import { SearchWrap, SearchInput, SearchButton } from './styled';

const SearchBar = () => (
  <SearchWrap>
    <SearchInput placeholder="Search" />
    <SearchButton />
  </SearchWrap>
);

export default SearchBar;
