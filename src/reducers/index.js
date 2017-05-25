import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js';
import ActiveBook from './reducer_active_book.js'; 

// Each key set in the rootReducer sets the 
// key in the global state.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
