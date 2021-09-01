import React, { useEffect, useState } from 'react';
import SearchBar from 'components/SearchBar/';
import SearchResult from 'components/SearchResult';
// import Cards from 'components/Cards';
// import data from 'assets/animals.json';
// import FormsBlock from 'components/FormsBlock';
import SortPanel from 'components/SortPanel';
import PagingPanel from 'components/PagingPanel';

import { Main, H1, Loader } from './styled';

const HomeNews: React.FC = () => {
  const [searchResults, setSearchResult] = useState<ISearchCards>({ docs: [], total: 0 });

  const [searchStringComplete, setSearchStringComplete] = useState('');
  const [orderField, setOrderField] = useState<string>('');
  const [orderDir, setOrderDir] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadError, setLoadError] = useState('');

  const [limit, setPageLimit] = useState<number>(50);
  const [page, setPageNum] = useState<number>(1);
  // const pages, total

  const doSearch = (searchStringD: string, orderFieldD: string, orderDirD: boolean) => {
    // console.log(searchStringD, orderFieldD, orderDirD);
    // console.log(searchStringComplete, orderField, orderDir);
    setIsLoading(true);
    setLoadError('');
    const URL = 'https://newsapi.org/v2/everything';
    const headers = {
      // 'Content-Type': 'application/json',
      // 'Authorization': 'Bearer KMuQ0BrRt4TNpMmuR4Nz',
      'X-Api-key': '37dc0289a68f45db881243df030d9f67',
    };
    const s = searchStringD ? `?q=${searchStringD}` : '';
    // if (orderField !== 'unsorted' && orderField !== '')
    //   s += `${s ? '&' : '?'}sort=${orderField}:${orderDir ? 'asc' : 'desc'}`;
    // s += `${s ? '&' : '?'}limit=${limit}&page=${page}`;
    fetch(`${URL}${s}`, { headers })
      .then(response => response.json())
      .then(
        data => {
          console.log(data);
          setSearchResult(data);
          setIsLoading(false);
        },
        error => {
          console.log(error);
          setIsLoading(false);
          setLoadError(error);
        }
      )
      .catch(err => setLoadError(err));
  };

  useEffect(() => {
    doSearch(searchStringComplete, orderField, orderDir);
  }, [searchStringComplete, orderField, orderDir, limit, page]);

  return (
    <Main>
      <H1>RSS React 2021Q3</H1>
      <SearchBar doSearch={setSearchStringComplete} />
      <SortPanel
        orderField={orderField}
        orderDir={orderDir}
        setOrderField={setOrderField}
        setOrderDir={setOrderDir}
      />
      <PagingPanel
        limit={limit}
        setPageLimit={setPageLimit}
        page={page}
        setPageNum={setPageNum}
        pages={searchResults.pages}
        total={searchResults.total}
      />

      {isLoading && <Loader>Loading...</Loader>}

      {loadError ? (
        <div>{loadError}</div>
      ) : (
        <SearchResult
          docs={searchResults.docs}
          limit={searchResults.limit}
          // offset={searchResults.offset}
          page={searchResults.page}
          pages={searchResults.pages}
          total={searchResults.total}
        />
      )}

      {/* <Cards data={data} /> */}
      {/* <FormsBlock /> */}
    </Main>
  );
};

export default HomeNews;
