import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from 'components/Header';
import About from 'pages/About';
import Home from 'pages/Home';
import Page404 from 'pages/Page404';
import Details from 'pages/Details';
import { NNav, StyledLink } from './styled';

const activeStyle = { color: '#0508f3' };
interface IApp {
  searchResults: ISearch;
  searchStringComplete: string;
  orderField: string;
  orderDir: boolean;
  isLoading: boolean;
  loadError: string;
  limit: number;
  page: number;
}
const App: React.FC<IApp> = (appStore: IApp) => (
  <Router>
    {/* <Header /> */}
    <div>
      <NNav>
        <StyledLink exact to="/" activeStyle={activeStyle}>
          Home
        </StyledLink>
        <StyledLink to="/about" activeStyle={activeStyle}>
          About
        </StyledLink>
      </NNav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  </Router>
);

const mapStateToProps = store => {
  console.log(store);
  return {
    searchResults: store.searchResults,
    searchStringComplete: store.searchStringComplete,
    orderField: store.orderField,
    orderDir: store.orderDir,
    isLoading: store.isLoading,
    loadError: store.loadError,
    limit: store.limit,
    page: store.page,
  };
};
export default connect(mapStateToProps)(App);
