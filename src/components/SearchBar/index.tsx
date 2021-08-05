import React from 'react';

import { SearchWrap, SearchInput, SearchButton } from './styled';

const SearchBar: React.FC = () => (
  <SearchWrap>
    <SearchInput placeholder="Search" />
    <SearchButton />
  </SearchWrap>
);

export default SearchBar;
