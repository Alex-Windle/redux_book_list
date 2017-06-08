import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.jsx';
import ActiveBook from './reducer_active_book.jsx'; 

// Each key set in the rootReducer sets the 
// key in the global state.
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
