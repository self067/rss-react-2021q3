import React from 'react';
import { render } from 'react-dom';
import './assets/styles/styles.sass';

// const aaa = 'aa'; // for build testing

const App = () => (
  <div className="container">
    <h1>Webpackkk</h1>
    <hr />
    <div className="logo" />
  </div>
);

render(<App />, document.getElementById('app'));
