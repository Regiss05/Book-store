import { combineReducers, configureStore } from 'redux';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const reducer = combineReducers({
  categoriesReducer,
  booksReducer,
});

const store = configureStore(reducer);
export default store;
