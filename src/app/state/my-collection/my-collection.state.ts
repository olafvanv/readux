import { Book } from '../../models/book.interface';
import * as fromRoot from '../state';

export default class MyCollectionState extends fromRoot.AppState {
  Books: Book[];
}

const initialState: MyCollectionState = {
  Books: [],
};

export const initializeState = (): MyCollectionState => initialState;
