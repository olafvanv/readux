import { createReducer, on } from "@ngrx/store";
import MyCollectionState, { initializeState } from "./my-collection.state";
import * as MyCollectionActions from './my-collection.actions';

const initialState: MyCollectionState = initializeState();

export const MyCollectionReducer = createReducer(
  initialState,
  on(MyCollectionActions.addBookToCollection, (state, action) => {
    const coll = [...state.Books];
    coll.push(action.book);
    return {
      ...state,
      Books: coll
    }
  }),
  on(MyCollectionActions.removeBookFromCollection, (state, action) => {
    const coll = [...state.Books];
    coll.splice(coll.findIndex(f => f.id === action.book.id), 1);

    return {
      ...state,
      Books: coll
    }
  })
);
