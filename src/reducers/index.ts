import { combineReducers } from 'redux';
import searchResultsReducer from './searchResults';
import orderDirReducer from './orderDir';
import orderFieldReducer from './orderField';
import isLoadingReducer from './isLoading';
import loadErrorReducer from './loadError';
import limitReducer from './limit';
import pageReducer from './page';

export default combineReducers({
  searchResults: searchResultsReducer,
  orderField: orderFieldReducer,
  orderDir: orderDirReducer,
  isLoading: isLoadingReducer,
  loadError: loadErrorReducer,
  limit: limitReducer,
  page: pageReducer,
});
