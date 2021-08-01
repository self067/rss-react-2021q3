import React from 'react';
import magn from './magnifier.svg';

import { SearchWrap, SearchInput, SearchButton } from './styled';

const SearchBar = () => (
  <SearchWrap>
    <SearchInput placeholder="Search" />
    <SearchButton />
    <img src="./magnifier.svg" alt="" />
    <img src={magn} alt="" />
  </SearchWrap>
);

export default SearchBar;
