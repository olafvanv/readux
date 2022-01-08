import { Book } from "../../models/book.interface";

export default class BookSearchState {
  Books: Book[];
  SearchQuery: string;
  Searching: boolean;
  Error: string;
}

const initialState: BookSearchState = {
  Books: [],
  SearchQuery: '',
  Searching: false,
  Error: ''
}

export const initializeState = (): BookSearchState => initialState;
