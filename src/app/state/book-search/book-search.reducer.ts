import { createReducer, on } from '@ngrx/store';
import * as BookSearchActions from './book-search.actions';
import BookSearchState, { initializeState } from './book-search.state';

const initialState: BookSearchState = initializeState();

export const BookSearchReducer = createReducer<BookSearchState>(
  initialState,
  on(BookSearchActions.searchBooks, (state, action) => {
    return {
      ...state,
      SearchQuery: action.query,
      Searching: true,
      Books: [],
      Error: ''
    }
  }),
  on(BookSearchActions.searchBooksComplete, (state, action) => {
    //Only books with description to avoid ugly empty book cards
    const books = action.books
      .filter(b => !!b.volumeInfo.description)
      .map(b => b)

    return {
      ...state,
      Books: books,
      Searching: false,
      Error: ''
    };
  }),
  on(BookSearchActions.searchBooksFailed, (state, action) => {
    return {
      ...state,
      Searching: false,
      Error: action.error
    }
  })
);
