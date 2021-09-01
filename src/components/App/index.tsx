import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Header from 'components/Header';
import About from '../../pages/About'; // '  pages/About';
import Home from '../../pages/Home';
import Page404 from '../../pages/Page404';
import Details from '../../pages/Details';
import { NNav, StyledLink } from './styled';

const activeStyle = { color: '#0508f3' };
const App: React.FC = () => (
  <Router>
    {/* <Header /> */}
    <div data-testid="app-router">
      <NNav>
        <StyledLink exact to="/" activeStyle={activeStyle}>
          Home
        </StyledLink>
        <StyledLink to="/about" activeStyle={activeStyle}>
          About
        </StyledLink>
      </NNav>

      <Switch>
        <Route exact path="/about" component={About} />
        <Route path="/details/:id" component={Details} />
        <Route exact path="/" component={Home} />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
);

export default App;
