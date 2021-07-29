// eslint-disable-next-line no-use-before-define
import React from 'react';
import { render } from 'react-dom';
// import Post from './models/Post.js';
// import json from './assets/json.json';
// import xml from './assets/data.xml';
// import csv from './assets/data.csv';
// import WebpackLogo from '../assets/webpack-logo.png';
// import './styles/styles.css';
import './styles/s.sass';

// const post = new Post('Webpack post', WebpackLogo);

// console.log(post, post.toString());
// console.log('JSON:', json);
// console.log('XML', xml );
// console.log('CSV', csv );
const App = () => (
  <div className="container">
    <h1>Webpackkk</h1>
    <hr />
    <div className="logo" />
  </div>
);
render(<App />, document.getElementById('app'));
