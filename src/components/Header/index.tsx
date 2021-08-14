import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from 'pages/About';
import Home from 'pages/Home';
import { HeaderWrap, HeaderItem } from './styled';

const Header: React.FC = () => {
  console.log('Header');
  return (
    <Router>
      <HeaderWrap>
        <HeaderItem href="/">Home</HeaderItem>
        <HeaderItem href="/About">About</HeaderItem>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </HeaderWrap>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
