import { combineReducers, configureStore } from 'redux';
import categoriesReducer from './categories/categories';
import booksReducer from './books/books';

const reducer = combineReducers({
  categoriesReducer,
  booksReducer,
});

export  const store = configureStore(reducer);
