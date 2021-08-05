import React from 'react';
// import SearchBar from 'components/SearchBar/';
// import Cards from 'components/Cards';
// import data from 'assets/animals.json';
import Form from 'components/Form';
import { Main, H1 } from './styled';

const App: React.FC = () => (
  <Main>
    <H1>RSS React 2021Q3</H1>
    {/* <SearchBar /> */}
    {/* <Cards data={data} /> */}
    <Form />
  </Main>
);

export default App;
