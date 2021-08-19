import React from 'react';
import { render } from 'react-dom';
import './styles/styles.sass';
import App from 'components/App';
import { Provider } from 'react-redux';
import store from './redux/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
