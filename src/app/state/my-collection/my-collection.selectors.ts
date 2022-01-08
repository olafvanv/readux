import { createFeatureSelector, createSelector } from "@ngrx/store";
import MyCollectionState from "./my-collection.state";

const myCollectionFeature = createFeatureSelector<MyCollectionState>('MyCollection');

export const getMyBookCollection = createSelector(
  myCollectionFeature,
  (state) => state.Books
);
