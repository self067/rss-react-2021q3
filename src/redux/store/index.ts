// import { createStore, StoreEnhancer } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import rootReducer from '../reducers';

export default configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// type WindowWithDevTools = Window & {
//   __REDUX_DEVTOOLS_EXTENSION__: () => StoreEnhancer;
// };

// const isReduxDevtoolsExtenstionExist = (
//   arg: Window | WindowWithDevTools
// ): arg is WindowWithDevTools => '__REDUX_DEVTOOLS_EXTENSION__' in arg;

// export default createStore(
//   rootReducer,
//   isReduxDevtoolsExtenstionExist(window) ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
// );
