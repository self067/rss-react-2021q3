import React, { useState } from 'react';

import { SearchWrap, SearchInput, SearchButton } from './styled';

interface ISearchBar {
  doSearch: (searchString: string) => void;
}

const SearchBar: React.FC<ISearchBar> = ({ doSearch }: ISearchBar) => {
  const [searchString, setSearchString] = useState('');

  const handleSearchKey = s => {
    if (s.key === 'Enter') doSearch(searchString);
  };

  return (
    <SearchWrap>
      <SearchInput
        value={searchString}
        placeholder="Search"
        onChange={e => setSearchString(e.target.value)}
        onKeyPress={e => handleSearchKey(e)}
      />
      <SearchButton onClick={() => doSearch(searchString)} />
    </SearchWrap>
  );
};

export default SearchBar;
