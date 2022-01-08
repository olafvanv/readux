import { createFeatureSelector, createSelector } from "@ngrx/store";
import BookSearchState from "./book-search.state";
import MyCollectionState from "../my-collection/my-collection.state";
import { Book } from "src/app/models/book.interface";

const bookSearchFeature = createFeatureSelector<BookSearchState>('BookSearch');
const collectionFeature = createFeatureSelector<MyCollectionState>('MyCollection');


export const getSearchingState = createSelector(
  bookSearchFeature,
  (state) => state.Searching
);

export const getSearchResults2 = createSelector(
  bookSearchFeature,
  collectionFeature,
  (state, collection) => {
    if(collection.Books) {
      const books: Book[] = state.Books.map(b => {
        return {
          ...b,
          inCollection: collection.Books.findIndex(f => f.id === b.id) > -1
        }
      });

      return books;
    } else {
      return state.Books;
    }
  }
);
export const getSearchResults = createSelector(
  bookSearchFeature,
  (state) => state.Books
)

export const getSearchQuery = createSelector(
  bookSearchFeature,
  (state) => state.SearchQuery
);
