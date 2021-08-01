import React from 'react';
import magn from 'assets/images/magnifier.svg';

import { SearchWrap, SearchInput, SearchButton } from './styled';

const SearchBar = () => (
  <SearchWrap>
    <SearchInput placeholder="Search" />
    <SearchButton />
  </SearchWrap>
);

export default SearchBar;
